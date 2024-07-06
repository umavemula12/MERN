import React, { useState } from "react";
import Example from "../Example";
export default function Login(){
    const [uname, setUname]=useState();
    const [pass, setPass]=useState();
    return(
        <div>
            <p></p>
            <Example/>
            <h2>Login</h2>
            <p>{uname}::{pass}</p>
            <input value={uname} id="name" onChange={(e)=>{setUname(e.target.value)}} placeholder="Enter User name"/><br/>
            <input value={pass} id="name" onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"/>
            <br/>
            <button>Submit</button>
        </div>
    )
}