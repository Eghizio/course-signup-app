// could be changed to just change to true when breakpoint is reached(and diffs from prev), limits rerenders
const useWindowSize = () => {
    const [width, setWidth] = React.useState();
    const [height, setHeight] = React.useState();

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        handleResize(); //init

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [width, height]);

    return { width, height };
};