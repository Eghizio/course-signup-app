const App = () => {
    const [showForm, setShowForm] = React.useState(false);
    const { loading, error, response } = useFetch("http://localhost:7000/api/students/all", 1200);

    return (
        <React.Fragment>
            <button onClick={() => setShowForm(prev => !prev)}>
                Change Screen
            </button>
            <Center>
                {showForm
                ?   <SignUpForm/>
                :   error ? <div>Failed to load students.</div>
                :   <Loader isLoading={loading}>
                        <StudentList students={response && response.students}/>
                    </Loader>
                }
            </Center>
        </React.Fragment>  
    );
};

const root = document.querySelector("#root");
ReactDOM.render(<App/>, root);