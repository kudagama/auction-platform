import React, { useState } from 'react';
import './AuctionHistory.css';

const AuctionHistory = () => {
  // Dummy data for auction history
  const auctionHistoryData = [
    {
      id: 1,
      itemName: 'Antique Vase',
      auctionDate: '2024-10-01',
      bidAmount: 250,
      status: 'Won',
    },
    {
      id: 2,
      itemName: 'Vintage Watch',
      auctionDate: '2024-09-28',
      bidAmount: 150,
      status: 'Lost',
    },
    {
      id: 3,
      itemName: 'Rare Painting',
      auctionDate: '2024-09-20',
      bidAmount: 500,
      status: 'Won',
    },
  ];

  // Calculate statistics
  const totalAuctions = auctionHistoryData.length;
  const totalBidsPlaced = auctionHistoryData.reduce((acc, auction) => acc + auction.bidAmount, 0);
  const auctionsWon = auctionHistoryData.filter((auction) => auction.status === 'Won').length;

  return (
    <div className="auction-history-container">
      <h2>Auction Dashboard</h2>

      <div className="dashboard-stats">
        <div className="stat-item">
          <h4>Total Auctions</h4>
          <p>{totalAuctions}</p>
        </div>
        <div className="stat-item">
          <h4>Total Bids Placed</h4>
          <p>${totalBidsPlaced}</p>
        </div>
        <div className="stat-item">
          <h4>Auctions Won</h4>
          <p>{auctionsWon}</p>
        </div>
      </div>

      <h3>Auction History</h3>
      <table className="auction-history-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Auction Date</th>
            <th>Bid Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {auctionHistoryData.map((auction) => (
            <tr key={auction.id}>
              <td>{auction.itemName}</td>
              <td>{auction.auctionDate}</td>
              <td>${auction.bidAmount.toFixed(2)}</td>
              <td className={auction.status === 'Won' ? 'status-won' : 'status-lost'}>
                {auction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuctionHistory;
