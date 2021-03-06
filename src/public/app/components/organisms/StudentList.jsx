const StudentListItem = ({ student }) => {
    const { width } = useWindowSize();
    const { firstName, secondName, email, class: studentClass, extras } = student;

    return (
        <li className="student-list-item">
            <span className="student-name">
                {secondName} {firstName}
            </span>
            {width > 400 &&
                <React.Fragment>
                    <span className="student-email">
                        {email}
                    </span>
                    <span className="student-class">
                        {studentClass}
                    </span>
                    <span  className="student-extras">
                        {extras.join(", ")}
                    </span>
                </React.Fragment>
            }
        </li>
    );
};

const SORT_QUERY = {
    BY_NAME: "secondName",
    BY_EMAIL: "email",
    BY_CLASS: "class",
};

// needs a lot of refactor tbh xD
const StudentList = ({ students }) => {
    const { width } = useWindowSize();
    const [studs, setStuds] = React.useState(students);

    const [filter, setFilter] = React.useState(null);
    const [filterValueTEMP, setFilterValueTEMP] = React.useState("");
    const [isAscending, setIsAscending] = React.useState(false);
    const [query, setQuery] = React.useState(null);

    const filterBy = (filter) => {
        console.log(filter, filterValueTEMP)
        setStuds(prev => prev.filter(student => JSON.stringify(student).toLowerCase().includes(filterValueTEMP.toLowerCase())));
    };

    const sortBy = (query) => {
        if(!query) return;
        if(isAscending)
            setStuds(prev => prev.sort((a, b) => a[query] > b[query] ? -1 : 1));
        else
            setStuds(prev => prev.sort((a, b) => a[query] > b[query] ? 1 : -1));
    };

    return (
        <div style={{width: "100%"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <h3>Table/list title</h3>
                <div>
                    <div style={{display: "inline-flex", margin: "0 20px" }}>
                        Filter: {/* need that select i guess, can be embedded into the input maybe? on no select, Search by all */}
                        {/* <select onChange={e => setFilter(e.target.value)}>
                            <option value="">Filter by</option>
                            {["Name", "Email", "Class", "Extras"].map(val => <option key={val} value={val}>{val}</option>)}
                        </select> */}
                        <input type="text" onChange={e => setFilterValueTEMP(e.target.value)}/>
                        <button disabled={!filterValueTEMP} onClick={() => filterBy(filter)}>FILTER</button>
                    </div>

                    <div style={{display: "inline-flex", margin: "0 20px" }}>
                        Sort:
                        <input type="checkbox" checked={isAscending} onChange={e => setIsAscending(e.target.checked)}/>
                        <select onChange={e => setQuery(e.target.value)}>
                            <option value="">Sort by</option>
                            {Object.entries(SORT_QUERY).map(([key, value]) => <option key={value} value={value}>{key}</option>)}
                        </select>
                        <button disabled={!query} onClick={() => sortBy(query)}>SORT</button>
                    </div>

                    <button onClick={() => setStuds(students)}>RESET</button> {/* reset the state of the controls, input etc */}
                </div>
            </div>

            <ul className="student-list">
                <li className="student-list-item">
                    <span className="student-name" onClick={() => sortBy(SORT_QUERY.BY_NAME)}>
                        Name
                    </span>
                    {width > 400 &&
                        <React.Fragment>
                            <span className="student-email" onClick={() => sortBy(SORT_QUERY.BY_EMAIL)}>
                                Email
                            </span>
                            <span className="student-class" onClick={() => sortBy(SORT_QUERY.BY_CLASS)}>
                                Class
                            </span>
                            <span  className="student-extras">
                                Extras
                            </span>
                        </React.Fragment>
                    }
                </li>
                {studs && studs.length === 0
                ?   <li>The list is empty. Try to refresh the page.</li>
                :   studs.map(student =>
                        <StudentListItem key={student.id} student={student}/>)
                }
            </ul>
        </div>
    );
};