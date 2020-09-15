const ACTIONS = {
    SORT_BY_NAME: "SORT_BY_NAME",
    SORT_BY_EMAIL: "SORT_BY_EMAIL",
    SORT_BY_CLASS: "SORT_BY_CLASS",
};

// reducer could be simplified to student property
const useSortedStudents = (students) => {
    const [sortedStudents, dispatch] = React.useReducer((state, action) => {
        switch(action.type){
            case ACTIONS.SORT_BY_NAME:
                const byName = state.students.slice(0);
                const isNameAscending = state.byNameAscending ? false : true;
                if(isNameAscending) byName.sort((a, b) => a.secondName > b.secondName ? -1 : 1);
                else byName.sort((a, b) => a.secondName > b.secondName ? 1 : -1);

                return { ...state, students: byName, byNameAscending: isNameAscending };
            case ACTIONS.SORT_BY_EMAIL:
                const byEmail = state.students.slice(0);
                const isEmailAscending = state.byEmailAscending ? false : true;
                if(isEmailAscending) byEmail.sort((a, b) => a.email > b.email ? -1 : 1);
                else byEmail.sort((a, b) => a.email > b.email ? 1 : -1);

                return { ...state, students: byEmail, byEmailAscending: isEmailAscending };
            case ACTIONS.SORT_BY_CLASS:
                const byClass = state.students.slice(0);
                const isClassAscending = state.byClassAscending ? false : true;
                if(isClassAscending) byClass.sort((a, b) => a.class > b.class ? -1 : 1);
                else byClass.sort((a, b) => a.class > b.class ? 1 : -1);

                return { ...state, students: byClass, byClassAscending: isClassAscending };
            default:
                throw new Error(`Unhandled action type at 'useSortedStudents': ${action.type}`);
        }
    }, { 
        students,
        byNameAscending: null,
        byEmailAscending: null,
        byClassAscending: null,
    });

    const sortByName = () => { dispatch({ type: ACTIONS.SORT_BY_NAME }); };
    const sortByEmail = () => { dispatch({ type: ACTIONS.SORT_BY_EMAIL }); };
    const sortByClass = () => { dispatch({ type: ACTIONS.SORT_BY_CLASS }); };

    return { sortedStudents: sortedStudents.students, sortByName, sortByEmail, sortByClass };
};