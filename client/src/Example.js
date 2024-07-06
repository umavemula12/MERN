import {Mycontext } from "./Mycontext";
import Mycomponent from "./Mycomponent";
import { useState } from "react";
import React from "react";
import Header from "./Components/Header";
import Login from "./Components/Login";
//provider->produces the data / props
export default function Example(){
    //provide
    const [text,setText]=useState("")
    
    return(
        <div>
            <Mycontext.Provider value={{text,setText}}>
                <Mycomponent/>
            
                {/** you can add as many componentes provider will provide all the givven components */}
            </Mycontext.Provider>

        </div>
    )
}