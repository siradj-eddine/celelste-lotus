import React, { useState } from 'react';
import '../css/login.css'; 
const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };



// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:5000/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });
  
//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message); // Show success message
//       } else {
//         alert('Failed to create account.');
//       }
//     } catch (error) {
//       console.error('Error signing up:', error);
//       alert('Failed to connect to the server.');
//     }
//   };

  


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="background">
      <div className="signup-container">
        <div className="signup-card">
          <h2 className="signup-title">Create Your Account</h2>
          <p className="signup-subtitle">Join us today! It's quick and easy.</p>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
          <p className="signup-footer">
            Already have an account? <Link to='/login'><a href="/login">Login</a></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
