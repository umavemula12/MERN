import React, { useState } from "react";

export default function Feedback() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        rollno: '',
        class: '',
        feedback: ''
    });
    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, formData]);
        setFormData({
            name: '',
            age: '',
            rollno: '',
            class: '',
            feedback: ''
        });
    };

    return (
        <div>
            <h2>Feedback Form</h2>
            <p>{formData.name}::{formData.age}::{formData.rollno}::{formData.class}::{formData.feedback}</p>

            <form onSubmit={handleSubmit}>
                <table border="5">
                    <tbody>
                        <tr><th colSpan="2">Feedback Form</th></tr>
                        <tr>
                            <td>Enter your Name:</td>
                            <td>
                                <input 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Enter your Age:</td>
                            <td>
                                <input 
                                    name="age"
                                    type="number"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="Enter your age"
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Enter your Roll Number:</td>
                            <td>
                                <input 
                                    name="rollno"
                                    value={formData.rollno}
                                    onChange={handleChange}
                                    placeholder="Enter your roll number"
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Enter your Class:</td>
                            <td>
                                <input 
                                    name="class"
                                    value={formData.class}
                                    onChange={handleChange}
                                    placeholder="Enter your class"
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Enter your Feedback:</td>
                            <td>
                                <input 
                                    name="feedback"
                                    value={formData.feedback}
                                    onChange={handleChange}
                                    placeholder="Enter your feedback"
                                    required 
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </form>

            {submittedData.length > 0 && (
                <div>
                    <h2>Submitted Feedback</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Roll Number</th>
                                <th>Class</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submittedData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                    <td>{data.rollno}</td>
                                    <td>{data.class}</td>
                                    <td>{data.feedback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
