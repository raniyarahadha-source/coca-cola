import React from 'react';
import "../css/card.css";

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="sustainability-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href="#learn-more" className="card-link">
          Learn more <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;