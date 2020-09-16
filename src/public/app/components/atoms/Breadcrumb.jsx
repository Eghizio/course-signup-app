const Breadcrumb = ({ to, navigate, children }) => {
    return (
        <span className="breadcrumb">
            <Link className="breadcrumb-link" to={to} navigate={navigate}>
                {children}
            </Link>
        </span>
    );
};