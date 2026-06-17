// import React, { useState } from 'react';
// import "../css/carousel.css";

// const Carousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

  
//   const slides = [
//     {
//       id: 1,
//       type: 'coke',
//       bgClass: 'bg-coke',
      
      

//     },
//     {
//       id: 2,
//       type: 'fanta',
//       bgClass: 'bg-fanta',
//       text: 'JUICY FLAVOR.',
//       subText: 'FANTA IS A REGISTERED TRADEMARK OF THE COCA-COLA COMPANY.',
//     },
//     {
//       id: 3,
//       type: 'sprite',
//       bgClass: 'bg-sprite',
//       text: 'CLEAR REFRESHMENT.',
//       subText: 'SPRITE IS A REGISTERED TRADEMARK OF THE COCA-COLA COMPANY.',
//     }
//   ];

//   return (
//     <div className="carousel-wrapper">
//       <div className="carousel-container">
        
       
//         <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 85}%)` }}>
//           {slides.map((slide, index) => {
//             let cardClass = "carousel-card " + slide.bgClass;
//             if (index === activeIndex) cardClass += " active";
            
//             return (
//               <div key={slide.id} className={cardClass}>
               
//                 {slide.type === 'coke' && (
//                   <div className="card-content">
//                     <div className="image-placeholder-hero">
                      
//                       <div className="character-badge">Hero Image</div>
//                     </div>
//                     <div className="text-content">
//                       <h1>HALF TIME?<br /><span className="brand-text">Coke<sub>®</sub></span> TIME.</h1>
//                     </div>
//                     <p className="disclaimer">{slide.subText}</p>
                    
//                     <div className="wave-line"></div>
//                   </div>
//                 )}

                
//                 {slide.type !== 'coke' && (
//                   <div className="card-content centered">
//                     <h1>{slide.text}</h1>
//                     <p className="disclaimer">{slide.subText}</p>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

      
//       <div className="carousel-dots">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
//             onClick={() => setActiveIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;