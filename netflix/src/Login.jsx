import React, { useState, useEffect } from 'react';
import './Login.css';
import Loreg from './Loreg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already logged in
    if (localStorage.getItem('loggedInUser')) {
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.username === formData.username && u.password === formData.password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user.username));
      navigate('/'); // redirect to homepage
    } else {
      setError('Invalid username or password!');
    }
  };

  return (
    <div className="login-container">
      <Loreg />
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
<br />
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
<br />
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
