import React, { useState, useContext } from "react";
import { FormContext } from "./Register1";

export default function Login1() {
    const { localDB } = useContext(FormContext);
    const [loginForm, setLoginForm] = useState({
        Username: "",
        Password: ""
    });
    const [message, setMessage] = useState("");

    function HandleChange(e) {
        const { name, value } = e.target;
        setLoginForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }

    function HandleLogin(e) {
        e.preventDefault();
        const user = localDB.find(
            user => user.Username === loginForm.Username && user.Password === loginForm.Password
        );
        if (user) {
            setMessage("Login successful!");
        } else {
            setMessage("Invalid username or password.");
        }
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10">
            <h1 className="text-xl text-center font-bold font-mono">Login</h1>
            <form onSubmit={HandleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        name="Username"
                        type="text"
                        value={loginForm.Username}
                        onChange={HandleChange}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        name="Password"

                        type="password"
                        value={loginForm.Password}
                        onChange={HandleChange}
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Log In
                    </button>
                </div>
            </form>
            {message && (
                <div className="mt-4 text-center">
                    <p className={message === "Login successful!" ? "text-green-500" : "text-red-500"}>
                        {message}
                    </p>
                </div>
            )}
        </div>
    );
}
