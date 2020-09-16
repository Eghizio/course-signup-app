const useTitle = (newTitle) => {
    const [title, setTitle] = React.useState("")

    React.useEffect(() => {
        document.title = newTitle;
        setTitle(newTitle);
    }, []);

    return title;
};