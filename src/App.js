import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuctionList from './components/AuctionList';
import HomePage from './components/HomePage';
import BiddingSystem from './components/BiddingSystem';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import Signup from './components/Signup'; 
import AuctionHistory from './components/AuctionHistory';
import { UserProvider } from './components/UserContext'; // Import the UserProvider
import Header from './components/Header'; // Import Header
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header /> {/* Header will show the user's email */}
         

          {/* Use a single Routes component to handle all your routes */}
          <Routes>
          <Route path="/Auction" element={<AuctionList />} />
          <Route path="/" element={<HomePage />} />
            <Route path="/bidding" element={<BiddingSystem />} />
            <Route path="/bidding/:id" element={<BiddingSystem />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/auction-history" element={<AuctionHistory />} />
            
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
