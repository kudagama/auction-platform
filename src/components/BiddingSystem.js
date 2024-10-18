import React, { useState, useEffect } from 'react';
import './BiddingSystem.css';

const BiddingSystem = () => {
  const auctionItem = {
    id: 1,
    title: 'Antique Vase',
    description: 'A beautiful antique vase from the Ming dynasty.',
    startingBid: 200,
    imageUrl: 'https://www.mayfairgallery.com/media/wysiwyg/shutterstock_118163158.jpg',
  };

  const [currentBid, setCurrentBid] = useState(auctionItem.startingBid);
  const [bidAmount, setBidAmount] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds (5 minutes) for demo
  const [notifications, setNotifications] = useState([]); // State to hold notifications

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Function to handle placing a bid
  const handlePlaceBid = (e) => {
    e.preventDefault();
    const bidValue = parseFloat(bidAmount);

    if (isNaN(bidValue) || bidValue <= currentBid) {
      addNotification('Your bid must be higher than the current bid.', 'error');
    } else {
      setCurrentBid(bidValue); // Update current bid
      setBidAmount('');
      addNotification(`Your bid of $${bidValue} was successful!`, 'success');
    }
  };

  // Add notification to the notifications state
  const addNotification = (message, type) => {
    const id = new Date().getTime(); // Unique ID for the notification
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id, message, type },
    ]);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== id)
      );
    }, 5000);
  };

  // Helper function to format time in minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="bidding-system-container">
      <h2 className="item-title">{auctionItem.title}</h2>
      <div className="auction-item">
        <img src={auctionItem.imageUrl} alt={auctionItem.title} className="item-image" />
        <p className="item-description">{auctionItem.description}</p>
        <h4 className="current-bid">Current Highest Bid: ${currentBid.toFixed(2)}</h4>
        <h4 className="time-left">Time Left: {formatTime(timeLeft)}</h4>
      </div>

      <form onSubmit={handlePlaceBid} className="bid-form">
        <div className="input-group">
          <label htmlFor="bidAmount" className="input-label">Enter Your Bid:</label>
          <input
            type="number"
            id="bidAmount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            placeholder={`Bid higher than $${currentBid.toFixed(2)}`}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="bid-btn">Place Bid</button>
      </form>

      {/* Notification System */}
      <div className="notification-container">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification ${notification.type}`}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
};



export default BiddingSystem;
