import React, { useState } from 'react';
import useUpload from '../utils/Upload';
import { MDBSpinner } from 'mdb-react-ui-kit';

import useMutations from '../utils/Mutations';


const Upload = () => {

    const { parseJSON, parseExcel, loading } = useUpload();
    const { addProductBenchmarks, addOpenPOs, deleteOpenPO, loading: requestLoad } = useMutations();

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const [finalStatus, setFinalStatus] = useState(null);


    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmitForm = async (event) => {
        setFinalStatus(null)
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        formData = Object.fromEntries(formData);

        if (formData['destination'] === "product") {
            let [products, benchmarks] = await parseJSON(selectedFile);
            console.log(products)
            console.log(benchmarks)
            let response = await addProductBenchmarks(products, benchmarks);
            if (response.code === 201){
                setFinalStatus({'status': true})
            }
            else {
                setFinalStatus({'status': false, 'errors': response.data})
            }
            console.log(response);
        }
        else if (formData['destination'] === "open_po") {
            let openPOs = await parseExcel(selectedFile);
            console.log("run")
            let response = await addOpenPOs(openPOs.slice(1));
            if (response.code === 200){
                setFinalStatus({'status': true})
            }
            else {
                setFinalStatus({'status': false, 'errors': response.data})
            }
        }
    }

    const handleDeleteClick = async () => { 
        const response = await deleteOpenPO();
        if (response.code === 200){
            setFinalStatus({'status': 'deleted'})
        }
        else {
            setFinalStatus({'status': false})
        }
    }

    return (
        <div style={{ margin: "15px" }}>

            <h1> Data Upload </h1>

            <form onSubmit={handleSubmitForm} >
                <input type="file" name="file" onChange={changeHandler} style={{ margin: "10px 0px" }} required />

                <br /> <br />

                <table style={{ width: "60%", }}>
                    <tbody>
                        <tr>
                            <td colSpan={2} ><h4> Data Destination </h4></td>
                        </tr>
                        <tr>
                            <td style={{ width: "200px" }}><input type="radio" value="product" name="destination" defaultChecked /> Product </td>
                            <td> Add product, duration for each stage and requirement data. </td>
                            <td> JSON File </td>
                        </tr>

                        <tr>
                            <td style={{ width: "200px" }}><input type="radio" value="open_po" name="destination" /> OpenPOs </td>
                            <td> Add OpenPO data for auto-scheduling. </td>
                            <td> Excel File </td>
                        </tr>

                    </tbody>
                </table>

                <input type="submit" style={{ margin: "30px 0" }}></input>
            </form>


            <button onClick={handleDeleteClick}> Delete OpenPO Data </button>

            <table>
                <tbody>
                {loading === true &&
                    <tr>
                        <td style={{ width: "200px" }}> <strong>Data Processing loading...</strong> </td>
                        <td> <MDBSpinner color='primary' /> </td>
                    </tr>
                }

                {requestLoad === true &&
                    <tr>
                        <td style={{ width: "200px" }}> <strong>Sending Data to Server...</strong> </td>
                        <td> <MDBSpinner color='success' /> </td>
                    </tr>
                }
                </tbody>
            </table>

            {finalStatus !== null && <p> {JSON.stringify(finalStatus)} </p>}


        </div>
    )
}

export default Upload