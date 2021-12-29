import { useState, useEffect } from "react"

// custom hook om niet telkens onderstaande code in component te plaatsen
// get request om json files op te vragen
const useFetch = (url) => {
    const [data, setData] = useState([]) // gebruik van naam data omwille van verschillende json files

    useEffect(() => {
        async function fetchData(e) {
            const requestOptions = {
                method: "GET"
            }
            const data = await fetch(url, requestOptions)
            const body = await data.json()
            setData(body)
            }
            fetchData()
    }, [url]);

    return {data}
}



export default useFetch