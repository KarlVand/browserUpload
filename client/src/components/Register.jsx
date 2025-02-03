import { useState, useEffect } from 'react';
import "../assets/css/authStyle.css";


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users/register");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchData();
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();

      if (response.ok) {
        alert(`User created successfully! User ID: ${data.userId}`);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred, please try again.');
    }
  };

  return (
    <div className="registerContainer">
      <form id='registerForm' onSubmit={handleSubmit}>
        <div className='usernameInput'>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className='mailInput'>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='passwordInput'>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;