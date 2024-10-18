import React, { useState, useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { UserContext } from './UserContext'; // Import UserContext

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext); // Get setUser from UserContext

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate a login API call
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'user@example.com') {
        // Successful login
        setUser({ email }); // Save the email in the context
        setLoading(false);
      } else {
        // Failed login
        setError('Invalid email or password');
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="signup-prompt">
        <p>Don't have an account?</p>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
