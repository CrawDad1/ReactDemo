import React from "react";

function SignUp({ setIsAuth }){
    return (
        <button className="SignUp" onClick={() => {setIsAuth(true)}}>SignUp</button>
    );
}

export default SignUp;