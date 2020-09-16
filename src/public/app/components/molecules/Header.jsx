const Header = ({ page, navigate, children }) => {
    // map from navigation props

    return (
        <header className="header-top">
            <div className="heading">
                <h1 className="heading-title">
                    {children}
                </h1>
                <span className="heading-breadcrumbs">
                    <Breadcrumb to="Home" navigate={navigate}>
                        Home
                    </Breadcrumb>
                    {page && page.name !== "Home" &&
                        <React.Fragment>
                            <span>{" > "}</span>
                            <Breadcrumb to={page.name} navigate={navigate}>
                                {page.name}
                            </Breadcrumb>
                        </React.Fragment>
                    }
                </span>
            </div>
            <nav className="navigation">
                <ul className="navigation-list">
                    <Link to="Browse" navigate={navigate} className="navigation-list-itemlink">
                        <li className="navgiation-list-item">
                            Zajęcia
                        </li>
                    </Link>
                    <Link to="SignUp" navigate={navigate} className="navigation-list-itemlink">
                        <li className="navgiation-list-item">
                            Zapisz się
                        </li>
                    </Link>
                    <Link to="TeacherPanel" navigate={navigate} className="navigation-list-itemlink">
                        <li className="navgiation-list-item">
                            Dla nauczycieli
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};