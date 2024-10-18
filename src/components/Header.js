import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Import UserContext

const Header = () => {
  const { user } = useContext(UserContext); // Access user from context

  return (
    <header style={{backgroundColor:"#1b0404"}}>
      <h1 style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>Auction Platform</h1>
      <nav>
        <ul>
        <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/Auction">Auction List</a></li>
          <li><a href="/auction-history">Auction History</a></li>

          
        </ul>
      </nav>
      {user && <p>Logged in as: {user.email}</p>} {/* Show email when logged in */}
    </header>
  );
};

export default Header;
