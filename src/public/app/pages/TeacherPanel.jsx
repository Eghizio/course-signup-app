const TeacherPanel = () => {
    const title = useTitle("Panel nauczyciela");
    const [user, setUser] = React.useState(null); //elevate that to Context
    const { loading, error, response } = useFetch("http://localhost:7000/api/students/all", 1200); //cache in data context or web cache
    // fetch data after logging in, LogIn could render children upon loggin in, tho it would need another proxy component to fetch

    return (
        <React.Fragment>
            TeacherPanel
            {/* {showForm
            ?   <SignUpForm/>
            :   error ? <div>Failed to load students.</div>
            :   <Loader isLoading={loading}>
                    <StudentList students={response && response.students}/>
                </Loader>
            } */}
            {user
            ?   
                <Loader isLoading={loading} isError={error}>
                    <StudentList students={response && response.students}/>
                </Loader>
            :   <LogIn logInUser={setUser}/>
            }
            
        </React.Fragment>
    );
};