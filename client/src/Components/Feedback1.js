import React, { useState } from "react";

export default function Feedback1() {
    const [formData,SubmitFormData]=useState({
        name:"",
        roll:"",
        feedback:""

    })
    const [table, SubmitTable] = useState([])
    function HandleChange(e){
        const {name,value}=e.target;
        SubmitFormData({...formData,[name]:value});
    }
    function HandleSubmit(){
        SubmitTable([...table,formData])
        SubmitFormData({name:"",
            roll:"",
            feedback:""
        })

    }
    return(
        <div>
            <input type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={HandleChange}
            />
            <input type="text"
            name="roll"
            value={formData.roll}
            placeholder="Roll"
            onChange={HandleChange}
            />
            <input type="text"
            name="feedback"
            value={formData.feedback}
            placeholder="feedback"
            onChange={HandleChange}
            />
            <button onClick={HandleSubmit}>Submit</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>RollNumber</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((key,index)=>(
                    <tr>
                        <td>{key.name}</td>
                        <td>{key.roll}</td>
                        <td>{key.feedback}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
