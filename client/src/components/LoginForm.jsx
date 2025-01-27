import React, { useState, useEffect } from "react";
import "../assets/css/authStyle.css";

const LoginForm = () => {
    useEffect(() => {
        document.title = "theName Login";
    }, []);

    const[input, setInput] = useState({
        username: "",
        password: ""
    });

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {
                  }
        alert("please provide a valid input");
      };
    
      const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

  return (
    <div className="loginContainer">
        <form id="loginForm" onSubmit={handleSubmitEvent}>
            <div className="mailInput">
                <label htmlFor = "email">Email</label>
                <input type="email" name="email" placeholder="Email" onChange={handleInput} />
            </div>
            
            <div className="passwordInput">
                <label htmlFor = "password">Password</label>
                <input type="password" name="password" placeholder="Password" onChange={handleInput}/>
            </div>
            
            <button type="submit">Login</button>
        </form>
        <p><a href="#">Forgot password?</a> . No account? Sign in <a>here</a></p>
    </div>
  );
}

export default LoginForm;