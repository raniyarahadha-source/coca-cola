import React, { useState, useEffect } from 'react';
import "../css/carousel1.css";


import cokeHeroImage from '../assets/image1.png'; 
import fantaHeroImage from '../assets/img2.png';
import spriteHeroImage from '../assets/img3.png';
import getPartyImage from '../assets/img4.png';
import fantaMangthaImage from '../assets/img5.png';
import allThunderImage from '../assets/img6.png';
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'coke',
      bgClass: 'bg-coke',
      
      
      image: cokeHeroImage
    },
    {
      id: 2,
      type: 'fanta',
      bgClass: 'bg-fanta',
      
      
      image: fantaHeroImage
    },
    {
      id: 3,
      type: 'sprite',
      bgClass: 'bg-sprite',
      
     
      image: spriteHeroImage
    },
    {
      id: 4,
      type: 'getParty',
      bgClass: 'bg-getParty',
      
      
      image: getPartyImage
    },
    {
      id: 5,
      type: 'fantaMangtha',
      bgClass: 'bg-fantaMangtha',
      image: fantaMangthaImage
    },
    {
      id: 6,
      type: 'allThunder',
      bgClass: 'bg-allThunder',
      image: allThunderImage
    }
  ];

  // --- AUTOMATIC SCROLL LOGIC ---
  useEffect(() => {
    
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => 
       
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 


    return () => clearInterval(timer);
  }, [activeIndex, slides.length]); 


  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 85}%)` }}>
          {slides.map((slide, index) => {
            let cardClass = "carousel-card " + slide.bgClass;
            if (index === activeIndex) cardClass += " active";
            
            return (
              <div key={slide.id} className={cardClass}>
                <div className="card-content">
                  
                  {slide.image && (
                    <div className="image-container-hero">
                      <img src={slide.image} alt={slide.text} className="hero-img" />
                    </div>
                  )}

                  <div className="text-content">
                    {slide.type === 'coke' ? (
                      <h1>HALF TIME?<br /><span className="brand-text">Coke<sub>®</sub></span> TIME.</h1>
                    ) : (
                      <h1>{slide.text}</h1>
                    )}
                  </div>
                  
                  <p className="disclaimer">{slide.subText}</p>
                  <div className="wave-line"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ഇൻഡിക്കേറ്റർ ഡോട്ട്സ് */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
            onClick={() => setActiveIndex(index)} // ഡോട്ടിൽ നൊക്കുമ്പോൾ ആ സ്ലൈഡിലേക്ക് മാറും
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;