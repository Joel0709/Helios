import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("http://localhost:5000/user")
            const user = response.data.find(user=>user.email===email && user.password===password);

            if (user) {
                navigate("/Allwatches"); 

            } else {
                setError("Invalid email or password"); 
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="logincard">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <div className="input-box">
                <input 
                    type="email" 
                    value={email} 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                /></div>
                <div className="input-box">
                <input 
                    type="password" 
                    value={password} 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                /></div>
                <button type="submit" className="login-btn">Login</button>
            </form>

            {error && <p style={{ color: "white" }}>{error}</p>} 

            <p className="terms">Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;
