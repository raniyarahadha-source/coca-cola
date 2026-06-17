import React from "react";
import "../css/brand.css";

import cocaColaImg from "../assets/1.svg";
import spriteImg from "../assets/2.svg";
import thumsUpImg from "../assets/thumsup.png";
import limcaImg from "../assets/3.svg";
import fantaImg from "../assets/fanta.png";
import maazaImg from "../assets/4.svg";

const BrandGrid = () => {
  const brands = [
    { id: 1, name: "Coca-Cola", logo: cocaColaImg },
    { id: 2, name: "Sprite", logo: spriteImg },
    { id: 3, name: "Thums Up", logo: thumsUpImg, special: true },
    { id: 4, name: "Limca", logo: limcaImg },
    { id: 5, name: "Fanta", logo: fantaImg },
    { id: 6, name: "Maaza", logo: maazaImg },
  ];

  return (
    <section className="brand-section">
      <h2 className="section-title">Explore Our Brands</h2>

      <div className="brand-grid">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-card">
            <img
              src={brand.logo}
              alt={brand.name}
              className={`brand-logo ${
                brand.special ? "thumsup-logo" : ""
              }`}
            />
          </div>
        ))}
      </div>

      <button className="view-all-btn">View All</button>
    </section>
  );
};

export default BrandGrid;