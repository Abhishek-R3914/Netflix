import React, { useState } from 'react';
import './Login.css';
import Loreg from './Loreg';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    mobile: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check for duplicate username
    if (users.find((user) => user.username === formData.username)) {
      setMessage('Username already exists!');
      return;
    }

    // Save new user
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    setMessage('Registration successful!');
    setFormData({ username: '', password: '', email: '', mobile: '' });
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
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
<br />
          <div className="mobile">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
<br />
          <button type="submit">Register</button>
          {message && <p style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Register;
