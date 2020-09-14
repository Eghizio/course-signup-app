const App = () => {
    const [showForm, setShowForm] = React.useState(false);

    return (
        <React.Fragment>
            <button onClick={() => setShowForm(prev => !prev)}>
                Change Screen
            </button>
            {showForm
            ?   <SignUpForm/>
            :   <StudentList timeout={1000}/>
            }
        </React.Fragment>  
    );
};

const root = document.querySelector("#root");
ReactDOM.render(<App/>, root);