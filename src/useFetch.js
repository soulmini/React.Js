import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal },{
                    method: 'GET'
                })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that server');
                    }
                    return res.json()
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((e) => {
                    if (e.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(e.message);
                    }
                });
        }, 1000);
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}
export default useFetch;