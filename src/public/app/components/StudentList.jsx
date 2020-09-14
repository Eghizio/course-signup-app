// const sampleStudent = {
//     id: "_zip2137op",
//     firstName: "John",
//     secondName: "Anchor",
//     email: "janchor@holy.god",
//     class: "5G",
//     extras: ["Second", "First", "Third", "Seventh"]
// };

const StudentListItem = ({ student }) => {
    const { id, firstName, secondName, email, class: studentClass, extras } = student;

    return (
        <li className="student-list-item">
            <span className="student-name">
                {secondName} {firstName}
            </span>
            <span className="student-email">
                {email}
            </span>
            <span className="student-class">
                {studentClass}
            </span>
            <span  className="student-extras">
                {extras.join(", ")}
            </span>
        </li>
    );
};

// change it to table i guess?
const StudentList = ({ timeout }) => {
    const { loading, error, response } = useFetch("http://localhost:7000/api/students/all", timeout);
    console.log(loading, error, response);

    if(error) return <div>Failed to load students.</div>
    if(loading) return <Loader isLoading={loading}></Loader>;
    return (
        <ul className="student-list">
            <li className="student-list-item">
                <span className="student-name">
                    Name
                </span>
                <span className="student-email">
                    Email
                </span>
                <span className="student-class">
                    Class
                </span>
                <span  className="student-extras">
                    Extras
                </span>
            </li>
            {response && response.students && response.students.length === 0
            ?   <li>The list is empty. Try to refresh the page.</li>
            :   response.students.map(student =>
                    <StudentListItem key={student.id} student={student}/>)
            }
        </ul>
    );
};