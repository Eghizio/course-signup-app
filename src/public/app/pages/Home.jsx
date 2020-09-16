const Home = () => {
    const title = useTitle("Strona główna");

    return (
        <React.Fragment>
            Home
            <div>
                host: {window.location.host}<br/>
                hostname: {window.location.hostname}<br/>
                href: {window.location.href}<br/>
                origin: {window.location.origin}<br/>
            </div>
        </React.Fragment>
    );
};