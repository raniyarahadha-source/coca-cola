import React from 'react';
import '../css/bookrecord.css';

const BookRecord = () => {

  const imageUrl = "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=1000"; 

  return (
    <div className="record-container">
      <div className="record-wrapper">
        
       
        <div className="image-section">
          <img src={imageUrl} alt="Limca Book of Records 2023" className="main-img" />
        </div>

        
        <div className="content-card">
          <h2 className="card-heading">
            Presenting the “Super 30” glorious years of Limca® Book of Records!
          </h2>
          <p className="card-text">
            This year’s Limca Book of Records is a combined edition of two challenging years and 
            celebrates stellar victories and accomplishments in human endeavor, education, 
            adventure, business, cinema, the natural world, literature, and the arts.
          </p>
          <button className="learn-more-btn">Learn more</button>
        </div>

      </div>
    </div>
  );
};

export default BookRecord;