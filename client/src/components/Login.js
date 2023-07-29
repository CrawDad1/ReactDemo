import React from "react";

function Login({ setIsAuth }){
    return (
        <button className="Login" onClick={() => {setIsAuth(true)}}>Login</button>
    );
}

export default Login;