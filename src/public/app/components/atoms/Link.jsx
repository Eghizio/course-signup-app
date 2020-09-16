const Link = ({ to, navigate, children, className }) => {
    return (
        <span className={`link ${className}`} onClick={() => navigate(to)}>
            {children}
        </span>
    );
};