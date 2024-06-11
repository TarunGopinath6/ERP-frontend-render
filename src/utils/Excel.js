import { useState } from "react";
import Excel from 'exceljs';

export default function useExcelUpload() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    return {

        loading, data,

        async parseFileBlob(fileBlob, columnNames, newColumnNames = null, defaultValues = {}) {

            setData([]);

            if (newColumnNames === null)
                newColumnNames = columnNames;

            setLoading(true);

            const buffer = await fileBlob.arrayBuffer();
            let sheetdata = [];

            const workbook = new Excel.Workbook();
            await workbook.xlsx.load(buffer);

            const worksheet = workbook.getWorksheet(1);

            var columnIndices = []
            for (var i = 1; i <= worksheet.columnCount; i++) {
                if (columnNames.includes(worksheet.getCell(1, i).value))
                    columnIndices.push(i);
            }

            const mapping = {}
            for (var i = 0; i < columnIndices.length; i++)
                mapping[columnNames[i]] = newColumnNames[i]

            // console.log(mapping)

            worksheet.eachRow((row, rowIndex) => {

                // console.log(row.getCell(1).value)

                const extractedRow = {};
                columnIndices.forEach((columnIndex, index) => {
                    // console.log(columnIndex, index)
                    extractedRow[
                        mapping[worksheet.getCell(1, columnIndex).value]
                    ] = row.getCell(columnIndex).value;
                });

                if (Object.keys(extractedRow).length !== 0)
                    sheetdata.push({ ...extractedRow, ...defaultValues })
                // console.log(rowIndex, row.values);
            });


            // console.log(sheetdata)
            setData(sheetdata);

            setLoading(false);

            return sheetdata;
        },


        async parseProducts(fileBlob, company) {

            setLoading(true);

            const buffer = await fileBlob.arrayBuffer();
            let sheetdata = [];

            let products = [];
            let benchmarks = [];

            const workbook = new Excel.Workbook();
            await workbook.xlsx.load(buffer);

            const worksheet = workbook.getWorksheet(1);

            var columnMapping = {}
            var departmentNames = []
            for (var i = 1; i <= worksheet.columnCount; i++) {
                columnMapping[worksheet.getCell(1, i).value] = i;
                if (!(worksheet.getCell(1, i).value in ["Product", "Material Group", "Product Description"]))
                    departmentNames.push()
            }

            worksheet.eachRow((row, rowIndex) => {
                products.push({
                    "part_num": row.getCell(columnMapping["Product"]).value,
                    "material_group": row.getCell(columnMapping["Material Group"]).value,
                    "description": row.getCell(columnMapping["Product Description"]).value,
                    "company": 1
                })

                departmentNames.map((key) => {
                    benchmarks.push({
                        "product": row.getCell(columnMapping["Product"]).value,
                        "department": key,
                        "duration": row.getCell(key).value
                    })
                })
            });


            setLoading(false);
            console.log(products)
            console.log(benchmarks)
            return products, benchmarks;
        }


    }
}