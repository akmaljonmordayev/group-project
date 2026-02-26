import React from "react";
import "./Locations.css";

const Locations = () => {
  const cities = [
    {
      id: 1,
      name: "Paris",
      count: 1,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      id: 2,
      name: "Rome",
      count: 1,
      image:
        "https://images.unsplash.com/photo-1525874684015-58379d421a52",
    },
    {
      id: 3,
      name: "New York City",
      count: 2,
      image:
        "https://images.unsplash.com/photo-1496588152823-86ff7695e68f",
    },
    {
      id: 4,
      name: "Tokyo",
      count: 2,
      image:
        "https://images.unsplash.com/photo-1505069446780-4ef442b5207f",
    },
  ];

  return (
    <div className="locations">
      <p className="locations-subtitle">Explore Restaurants & Cafes</p>
      <h2 className="locations-title">Search By Cuisine</h2>

      <div className="locations-wrapper">
        {cities.map((city) => (
          <div key={city.id} className="location-card">
            <div className="location-image-box">
              <img src={city.image} alt={city.name} />
            </div>
            <p className="location-name">
              {city.name} ({city.count})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;