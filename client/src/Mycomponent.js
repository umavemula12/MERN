import { useContext } from "react"
import {Mycontext } from "./Mycontext"

export default function Mycomponent(){
    //consumer
    const {text, setText}=useContext(Mycontext)
    return(
        <div>
            <h1>{text}</h1>
            <button onClick={()=>setText("Hello world")}>Click on me</button>
        </div>
    )
}