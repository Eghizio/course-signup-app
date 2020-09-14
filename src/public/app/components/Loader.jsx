const Loader = ({ isLoading, children }) => 
    isLoading
    ?   <div className="spinner"></div>
    :   <React.Fragment>{children}</React.Fragment>;