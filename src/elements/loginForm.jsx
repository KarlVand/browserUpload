import React, { useState, useEffect } from "react";

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
    <form onSubmit={handleSubmitEvent}>
        <label for = "username">Username</label>
        <input type="text" placeholder="Username" onChange={handleInput} />
        <label for = "password">Password</label>
        <input type="password" placeholder="Password" onChange={handleInput}/>
        <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;