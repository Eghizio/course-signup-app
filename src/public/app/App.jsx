const Pages = {
    "Home": { component: Home, name: "Home", url: "/home" },
    "Browse": { component: BrowseClasses, name: "Browse", url: "/browse" },
    "SignUp": { component: SignUp, name: "SignUp", url: "/signup" },
    "TeacherPanel": { component: TeacherPanel, name: "TeacherPanel", url: "/teacherpanel" }
};

// rewrite to use URLs from pages instead keys/names, can just rename Pages=>navigation and change keys to url
const App = () => {
    const { ActivePage, navigate } = useNavigation(Pages, "Home");
    const APP_TITLE = "Title";

    return (
        <React.Fragment>
            <Header page={ActivePage} navigate={navigate}>
                {APP_TITLE}
            </Header>
            <main>
                <Center>
                    {ActivePage && <ActivePage navigate={navigate}/>}
                </Center>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

const root = document.querySelector("#root");
ReactDOM.render(<App/>, root);