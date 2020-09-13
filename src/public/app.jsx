(() => {
// trying out react from without webpack etc
const Input = ({ name, placeholder, setter }) => {
    return (
        <input type="text" name={name} placeholder={placeholder} onChange={e => setter(e.target.value)}/>
    );
};

const SelectInput = ({ name, values, setter }) => {
    return (
        <select name={name} className="" onChange={e => setter(e.target.value)}>
            {values.map(value => 
                <option key={value} value={value}>
                    {value.toString().toUpperCase()}
                </option>
            )}
        </select>
    );
};

const CheckboxInputs = ({ values, setter }) => {
    const handleCheckToggle = (e, val) => {
        if(e.target.checked)
            setter(prev => [...prev, val]);
        else
            setter(prev => prev.filter(el => el !== val));
    };

    return (
        <div>
            {values.map(value => 
                <div key={value}>
                    <input type="checkbox" name={value} className="checkbox-extra" onChange={(e) => handleCheckToggle(e, value)}/>
                    <label htmlFor={value}>
                        {value}
                    </label>
                </div>
            )}
        </div>
    );
};

const FormRow = ({ name, type, values, setter, children }) => {

    return (
        <div className="form-row">
            <label htmlFor="first-name">
                {children}
            </label>
            {type === "text" || type === "email"
            ?   <Input name={name} setter={setter}/>
            :   type === "select"
            ?   <SelectInput name={name} values={values} setter={setter}/>
            :   type === "checkbox"
            ?   <CheckboxInputs values={values} setter={setter}/>
            : null
            }
        </div>
    );
};

const SignUpForm = () => {
    const [firstName, setFirstName] = React.useState(""); 
    const [secondName, setSecondName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [selectedClass, setSelectedClass] = React.useState("");
    const [selectedExtras, setSelectedExtras] = React.useState([]);

    const classes = ["1A", "2B", "3C", "4D", "5E", "6F", "7G", "8H"];
    const extras = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eight"];

    const handleSubmit = () => {
        const formData = { firstName, secondName, email, class: selectedClass, extras: selectedExtras };
        console.log(formData);
    };

    return (
        <div>
            <h3>Sign up here:</h3>
            <FormRow name={"first-name"} placeholder="First name" type="text" setter={setFirstName}>
                First name:
            </FormRow>
            <FormRow name={"second-name"} placeholder="Second name" type="text" setter={setSecondName}>
                Second name:
            </FormRow>
            <FormRow name={"email"} placeholder="Email" type="email" setter={setEmail}>
                Email:
            </FormRow>
            <FormRow name={"class"} type="select" values={classes} setter={setSelectedClass}>
                Class:
            </FormRow>
            <FormRow name={"extras"} type="checkbox" values={extras} setter={setSelectedExtras}>
                Extras:
            </FormRow>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

const root = document.querySelector("#root");
ReactDOM.render(<SignUpForm/>, root);

})();