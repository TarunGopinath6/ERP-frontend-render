import { useState } from "react";
import Excel from 'exceljs';


const readJsonFile = (fileBlob) =>
    new Promise((resolve, reject) => {
        const fileReader = new FileReader()

        fileReader.onload = event => {
            if (event.target) {
                resolve(JSON.parse(event.target.result))
            }
        }

        fileReader.onerror = error => reject(error)
        fileReader.readAsText(fileBlob)
    })


export default function useUpload() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    return {

        loading, data,

        async parseJSON(fileBlob) {

            setData([]);
            setLoading(true);

            const parsedData = await readJsonFile(fileBlob);
            // console.log(parsedData)

            let products = [];
            let benchmarks = []

            parsedData.map(item => {
                products.push({
                    "part_num": item['part_num'],
                    "description": item['description'],
                    "material_group": item['material_group'],
                    "company": item['company'],
                    "revision": item['revision'],
                    "details": item['details'],
                    "assembly": item['assembly']
                })

                item['stages'].map((stage) => {

                    benchmarks.push({
                        "product": item['part_num'],
                        "stage": stage['name'],
                        //"index": stage['index'],
                        "duration": stage['duration'],
                        "requirements": stage['requirement'],
                    })
                })

            })

            setLoading(false);
            return [products, benchmarks];
        },

        async parseExcel(fileBlob) {
            setData([]);

            let columnNames = {
                "Gate Entry Qty": 'gate_entry',
                "Actual Qty": 'actual_quantity', "Unit Price": 'unit_price', "SOP": 'sop',
                "PO": 'po', "PO Line": 'po_line', "Part No": 'product', "PU": 'pu',
                "PO Date": 'po_date', "Schedule Date": 'due_date'
            }

            setLoading(true);

            const buffer = await fileBlob.arrayBuffer();
            let sheetdata = [];

            const workbook = new Excel.Workbook();
            await workbook.xlsx.load(buffer);

            const worksheet = workbook.getWorksheet(1);

            var columnIndices = []
            for (var i = 1; i <= worksheet.columnCount; i++) {
                if (worksheet.getCell(1, i).value in columnNames)
                    columnIndices.push(i);
            }

            // console.log(mapping)

            worksheet.eachRow((row, rowIndex) => {

                // console.log(row.getCell(1).value)

                const extractedRow = {};
                columnIndices.forEach((columnIndex, index) => {
                    // console.log(columnIndex, index)
                    extractedRow[
                        columnNames[worksheet.getCell(1, columnIndex).value]
                    ] = row.getCell(columnIndex).value;
                });

                if (Object.keys(extractedRow).length !== 0)
                    sheetdata.push({ ...extractedRow, ...{'company': "ac715c73-b9b4-4889-86ef-82c9102667bb"} })
            });

            console.log(sheetdata)
            setData(sheetdata);
            setLoading(false);

            return sheetdata;
        }
    }
}
