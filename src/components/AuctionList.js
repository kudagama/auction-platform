import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AuctionList.css';

const auctions = [
  {
    id: 1,
    title: 'Antique Vase',
    description: 'A beautiful antique vase from the Ming dynasty.',
    startingBid: '$200',
    imageUrl: 'https://www.mayfairgallery.com/media/wysiwyg/shutterstock_118163158.jpg',
  },
  {
    id: 2,
    title: 'Vintage Watch',
    description: 'A vintage wristwatch in excellent condition.',
    startingBid: '$150',
    imageUrl: 'https://thumbs.dreamstime.com/b/vintage-pocket-watch-antique-35091798.jpg',
  },
  {
    id: 3,
    title: 'Rare Painting',
    description: 'An exquisite painting from a renowned artist.',
    startingBid: '$500',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  },
];

const AuctionList = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewDetails = (id) => {
    navigate(`/bidding/${id}`); // Redirect to the bidding system
  };

  return (
    <div className="auction-container">
      {auctions.map((auction) => (
        <div className="auction-card" key={auction.id}>
          <img src={auction.imageUrl} alt={auction.title} className="auction-image" />
          <h2>{auction.title}</h2>
          <p>{auction.description}</p>
          <p className="starting-bid">Starting Bid: {auction.startingBid}</p>
          <button onClick={() => handleViewDetails(auction.id)} className="details-btn">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default AuctionList;
