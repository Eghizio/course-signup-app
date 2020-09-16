const useFetch = (url) => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [response, setResponse] = React.useState(null);

    React.useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(url)
            .then(res => res.json())
            .then(json => !signal.aborted && setResponse(json))
            .catch(err => !signal.aborted && setError(err))
            .finally(() => !signal.aborted && setLoading(false));

        return () => { abortController.abort(); };
    }, [url]);

    const status = { loading, error, response };

    return status;
};