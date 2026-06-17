import React from 'react';
import NewsCard from './card1';
import '../css/card.css';

const SustainabilityNews = () => {
  const newsData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600', // Sea beach image
      title: 'On a mission to a world without waste',
      description: 'We aim to collect back packaging for recycling equivalent to what we put out in the market by 2030.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600', // Oranges on tree image
      title: 'Promoting Sustainable Agriculture',
      description: 'Our efforts are focussed on improving the overall fruit availability, increasing farming efficiency as well as building food processing capacity in the country, thereby helping farmers increase their income.'
    }
  ];

  return (
    <div className="sustainability-container">
      <h2 className="main-heading">Sustainability news</h2>
      <div className="cards-grid">
        {newsData.map((news) => (
          <NewsCard 
            key={news.id}
            image={news.image}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SustainabilityNews;