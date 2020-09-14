const serializeArrayToCSV = (serializable: any[], delimiter: string = ","): string => {
    if(serializable.length === 0) throw Error("Attempting to serialize an empty array!");
    serializable = serializable.slice(0);

    const header = Object.keys(serializable[0]).join(delimiter) + "\n";
    const serializedCSV = serializable.reduce((csv, el) => {
        const row = Object.values(el).reduce((r: string, e) => {
            if(Array.isArray(e)) e = e.join(";");
            return `${r}${e}${delimiter}`;
        }, "");

        return csv + row.slice(0, row.length-1) + "\n";
    }, header);

    return serializedCSV;
};

export default serializeArrayToCSV;