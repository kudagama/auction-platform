import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// HomePage Component
const HomePage = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <div className="overlay">
          <h1>Welcome to the Exclusive Auction Experience</h1>
          <p>Bid on handpicked treasures and collectibles, and become part of our auction community.</p>
          <Link to="/signup" className="cta-button">Start Bidding</Link>
        </div>
      </header>

      <section className="featured-auctions">
        <h2>Featured Auctions</h2>
        <div className="auction-cards">
          <div className="card">
            <img src="https://www.mayfairgallery.com/media/wysiwyg/shutterstock_118163158.jpg" alt="Antique Vase" />
            <h3>Antique Vase</h3>
            <p>Discover rare antique vases from renowned collections.</p>
            <Link to="/auction/1" className="card-button">View Auction</Link>
          </div>
          <div className="card">
            <img src="https://thumbs.dreamstime.com/b/vintage-pocket-watch-antique-35091798.jpg" alt="Vintage Watch" />
            <h3>Vintage Watch</h3>
            <p>Bid on limited edition timepieces from the 1960s.</p>
            <Link to="/auction/2" className="card-button">View Auction</Link>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Rare Painting" />
            <h3>Rare Painting</h3>
            <p>Own a masterpiece from acclaimed artists.</p>
            <Link to="/auction/3" className="card-button">View Auction</Link>
          </div>
        </div>
      </section>

      <section className="about-auctions">
        <h2>How It Works</h2>
        <p>Our platform offers seamless bidding, exclusive access to unique items, and a secure environment for all bidders. Here’s how to get started:</p>
        <ul>
          <li><strong>Create an Account:</strong> Sign up and explore curated auctions.</li>
          <li><strong>Place Your Bid:</strong> Submit real-time bids and compete for unique items.</li>
          <li><strong>Win the Auction:</strong> Secure your desired item with the highest bid.</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Join the Auction Revolution</h2>
        <p>Don’t miss your chance to be part of an exciting and exclusive community of bidders.</p>
        <Link to="/signup" className="cta-button large">Sign Up Now</Link>
      </section>
    </div>
  );
};

export default HomePage;
