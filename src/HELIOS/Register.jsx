import React, { useState } from 'react';
import "./Watch.css";
import axios from "axios";
import validator from "validator";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); 

    
    if (!validator.isEmail(email)) {
      setError("Invalid email address");
      return;
    }

    
    if (!validator.isMobilePhone(phone, "en-IN")) { 
      setError("Invalid phone number");
      return;
    }
    try {
      await axios.post(`http://localhost:5000/user`, { email, password, phone });
      navigate("/login"); 
    } catch (err) {
      console.error("Registration error:", err);
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className='logincard'>
      <form onSubmit={handleRegister}>
        <div>
          <h1>Register</h1>
        </div>

        {error && <p className="error-message">{error}</p>} 

        <div className='input-box'>
          <input type="email" value={email} placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className='input-box'>
          <input type="password" value={password} placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div className='input-box'>
          <input type="text" value={phone} placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)} required />
        </div>

        <button type="submit" className='login-btn'>Continue</button>

        <p className="terms">
          By clicking on Register, I accept the <a href="/">Terms & Conditions</a> & <a href="/">Privacy Policy</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
