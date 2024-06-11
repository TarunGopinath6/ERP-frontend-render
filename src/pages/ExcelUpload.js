import React, { useState } from 'react';
import useExcelUpload from '../utils/Excel';
import { MDBSpinner } from 'mdb-react-ui-kit';

import useMutations from '../utils/Mutations';


const ExcelUpload = () => {

    const { parseFileBlob, loading, data, parseProducts } = useExcelUpload();
    const { addData, loading: addLoading } = useMutations();

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const [finalStatus, setFinalStatus] = useState(null)

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };


    const handleSubmitForm = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        formData = Object.fromEntries(formData);


        let processedData = []
        if (formData['destination'] === "product") {
            let filteredData = await parseFileBlob(selectedFile,
                ["Product Description", "Material Group", "Product"],
                ['description', 'material_group', 'part_num'],
                { "company": 1, "route": ["Profiling", "Fabrication"] })

            //let productData = await parseProducts(selectedFile);;
            // console.log(productData)
            processedData = filteredData.slice(1,)
            console.log(processedData)
        }
        else if (formData['destination'] === 'open_po') {
            let filteredData = await parseFileBlob(selectedFile,
                ["Open Qty", "PU", "PO", "PO Line", 'Product'],
                ["open_quantity", 'pu', 'po', 'po_line', 'part_num'])

            for (var i = 0; i < filteredData.length; i++) {
                processedData.push(
                    {
                        'iwo': filteredData[i]['pu'] + '-' + filteredData[i]['po'] + '-' + filteredData[i]['po_line'],
                        'open_quantity': filteredData[i]['open_quantity'],
                        'closed_quantity': filteredData[i]['closed_quantity'],
                        "closed_quantity": 0, "qc_comments": "NA",
                        'product': filteredData[i]['part_num']
                    }
                )
            }
            
            processedData = processedData.slice(1,)
            console.log(processedData)
        }


        let response = await addData(processedData, formData['destination']);
        try {
            let out = {
                'error': response.data.data.CreateObject.error,
                'ok': response.data.data.CreateObject.ok
            }
            setFinalStatus(out)
        }
        catch (error) {
            setFinalStatus({ 'status': false })
            console.log(error)
        }
        console.log(response);
    };

    return (
        <div style={{ margin: "15px" }}>

            <h1> Excel Upload Form </h1>

            <form onSubmit={handleSubmitForm} >
                <input type="file" name="file" onChange={changeHandler} style={{ margin: "10px 0px" }} required />

                <table style={{ width: "60%", }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "200px" }}><input type="radio" value="L & T" name="company" defaultChecked /> L & T </td>
                            <td>
                                Customer, PU, Product Description, PO, PO Line,
                                PO Date, Schedule Date, Part No, Description, Material Group,
                                Open Qty, Gate Entry Qty, Actual Qty, Unit Price,
                                Open Value, SOP, DrawingRevision
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "200px" }}><input type="radio" value="Flender" name="company" /> Flender </td>
                            <td>
                                Customer, Purchasing Doc., Item, Document Date, desired del. date,
                                Description, open Quantity,DrawingRevision
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "200px" }}><input type="radio" value="Kobelco" name="company" /> Kobelco </td>
                            <td>
                                Vendordeliverydate, Product_ID, Short Text,
                                Still to be delivered,
                                Net price, Drgrev
                            </td>
                        </tr>

                    </tbody>
                </table>

                <br></br>

                <table style={{ width: "60%", }}>
                    <tbody>
                        <tr>
                            <td colSpan={2} ><h4> Data Destination </h4></td>
                        </tr>
                        <tr>
                            <td style={{ width: "200px" }}><input type="radio" value="product" name="destination" defaultChecked /> Product </td>
                            <td>
                                Create product records from the given data. Assume all are for L&T with the route as Profiling, Fabrication.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "200px" }}><input type="radio" value="open_po" name="destination" /> OpenPOs </td>
                            <td>
                                Create OpenPO records from the given data. Assume QC comments as 'NA', closed quantity as 0, IWO as 'PU-PO-PO_Line'.
                            </td>
                        </tr>

                    </tbody>
                </table>

                <input type="submit" style={{ margin: "30px 0" }}></input>
            </form>

            {isFilePicked ? (
                <div style={{ margin: "50px 0" }}>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>

                    <br></br>
                    <p> {JSON.stringify(data)}</p>
                    <p> {JSON.stringify(finalStatus)} </p>
                </div>
            ) : (
                <>  </>
            )}

            {loading === true ?
                <MDBSpinner color='primary'>
                    <span className='visually-hidden'>Data Processing loading...</span>
                </MDBSpinner> : <></>}

            {addLoading === true ?
                <MDBSpinner color='success'>
                    <span className='visually-hidden'>Data insertion loading...</span>
                </MDBSpinner> : <></>}


        </div>
    )
}

export default ExcelUpload