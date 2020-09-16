const LogIn = ({ logInUser }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogIn = () => {
        // temp validation xd
        if(username.length<3 || password.length<6) return;
        // hash pwd
        // post and logInUser(response);

        logInUser({ name: username, pwd: password });
    };

    return (
        <div>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={e => setUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <button onClick={handleLogIn}>Log in</button>
        </div>
    );
};