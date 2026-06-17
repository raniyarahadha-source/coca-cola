import React from 'react';
import '../css/experience.css';


import cokeExperienceImg from '../assets/img7.png'; 

const Experiences = () => {
  return (
    <section className="experiences-section">
    
      <h2 className="section-title">Experiences</h2>
      
      <div className="experiences-container">
        
       
        <div className="experiences-content">
          <h1 className="main-heading">
            Coke Studio Bharat: Drink. <br />
            Scan. Unlock Exclusive <br />
            Music.
          </h1>
          <button className="explore-btn" onClick={() => console.log('Explore Clicked')}>
            Explore Now
          </button>
        </div>

        
        <div className="experiences-image-box">
          <img 
            src={cokeExperienceImg} 
            alt="Coke Studio Bharat Experience" 
            className="experience-banner-img" 
          />
        </div>

      </div>
    </section>
  );
};

export default Experiences;