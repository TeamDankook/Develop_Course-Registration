import React, { useState, useEffect } from "react";
import "./App.css"; // 스타일 적용을 위해 import

function App() {
    const [studentId, setStudentId] = useState(sessionStorage.getItem("student_id") || "");
    const [password, setPassword] = useState(sessionStorage.getItem("password") || "");

    useEffect(() => {
        sessionStorage.setItem("student_id", studentId);
        sessionStorage.setItem("password", password);
    }, [studentId, password]);

    const handleLogin = () => {
        if (!studentId || !password) {
            alert("Please enter both Student ID and Password.");
            return;
        }
        alert(`Student ID: ${studentId}\nPassword: ${password}`);
    };

    return (
        <div className="container">
            <h1 className="header">Login</h1>
            <div className="form-group">
                <label htmlFor="student_id">Student ID</label>
                <input
                    id="student_id"
                    name="student_id"
                    type="number"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default App;
