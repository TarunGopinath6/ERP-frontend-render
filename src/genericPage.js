// Import needed util


const Page({ prop1, prop2 }) {

    const { getData, loading } = useEarnings();

    // Default data you want to display
    const [data, setData] = useState({ "value1": 'NULL' });
    const [filters, setFilters] = useState({"start": null, "end": null})

    async function fetchData() {
        let response = await getData(filters);

        if (response.code === 200) {
            try {
                setData({'value1': 1000})
            }
            catch {
                // Incase something breaks
                setData({ "value1": "Error" })
            }
        }
        else {
            alert("Data not retrived. Please try again.")
        }
        //console.log(JSON.stringify(response))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                loading === true ?
                    <Loading /> :
                    <div>
                        <p>Data loaded</p>
                        <p> {data.value1} </p>
                    </div>
            }
        </div>
    )
}