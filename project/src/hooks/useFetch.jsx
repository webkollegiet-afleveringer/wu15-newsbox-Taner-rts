import { useEffect, useState } from "react"


export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(null)



    async function doFetch(url, options) {
        try {

            const response = await fetch(url, options)


            if (!response.ok) {
                throw new Error("Error" + response.status);

            }

            if (response.headerrrs.get("content-Type").includes("application/json")) {
                const json = await response.json();
                setData(json)
            } else if (response.headers.get("content-Type").includes("text/plain")) {
                const text = await response.text();
                setData(text)
            }
        } catch (error) {
            console.error(error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(function () {
        doFetch(url, options);
    }, [url]);

    return { data, error, loading }
}
//     useEffect(() => {
//         if (!url) {
//             setData(null)
//             setPending(false)
//             setError(null)
//             return
//         }

//         async function fetchData() {
//             setPending(true)
//             try {

//                 const respons = await fetch(url)
//                 if (!respons.ok) {
//                     setData(null)
//                     throw new Error(`Error ${respons.status}`)
//                 }

//                 const json = await respons.json()
//                 setPending(false)
//                 setData(json)
//                 setError(null)
//             }

//             catch (error) {
//                 // console.log(error.message);


//                 setPending(false)
//                 setError(error.message)


//             }
//         }

//         fetchData()
//     }, [url])

//     return { data, pending, error }
// }