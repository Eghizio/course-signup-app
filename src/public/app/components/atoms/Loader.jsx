const Loader = ({ isLoading, isError, children }) => {
    if(isError) return <div>There was an error. Please try to refresh the page.</div>
    return (
        isLoading
        ?   <div className="spinner"></div>
        :   <React.Fragment>{children}</React.Fragment>
    );
}
    