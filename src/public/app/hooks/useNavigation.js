// const useNavigation = (pages, initialPage) => {
//     const [ActivePage, setActivePage] = React.useState(() => pages[initialPage]);

//     const navigate = (page) => {
//         if(pages[page])
//             setActivePage(pages[page]);
//         else 
//             console.warn("Invalid page name: useNavigation");
//     };

//     return { ActivePage, navigate };
// };

const useNavigation = (pages, initialPageName) => {
    const [ActivePage, dispatch] = React.useReducer((state, action) => {
        return pages[action.payload].component;
    }, pages[initialPageName].component);

    const navigate = (pageName) => {
        dispatch({ payload: pageName });
    };

    return { ActivePage, navigate };
};