import { useState } from 'react'
import "./Restaurants.css"


function Restaurans() {


  const data = [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      city: "Rome",
      title: "Two Hour Walking Tour Of Manhattan",
      reviews: 1,
      location: "51 Dekor Land, Thailand",
      price: 230,
      featured: true,
      sale: true,
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      city: "New York City",
      title: "American Parks Trail End Rapid City Express",
      reviews: 0,
      location: "51 Dekor Land, Thailand",
      price: 200,
      featured: true,
      sale: false,
    },
    {
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      city: "Paris",
      title: "Modern Stefano La Piazze Wergeland",
      reviews: 0,
      location: "Veins City, Italy",
      price: 177,
      featured: true,
      sale: false,
    },
    {
      image: "https://images.unsplash.com/photo-1496412705862-e0088f16f791",
      city: "New York City",
      title: "Vatican Museums, Sistine Chapel Skip The",
      reviews: 0,
      location: "Switzerland city",
      price: 100,
      featured: false,
      sale: true,
    },
  ];


    return (
      <div className="wrapper">
        <p className="top-text">Our Best Restaurant</p>
        <h1 className="title">Popular Restaurants In Town</h1>

        <div className="cards">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="image-box">
                <img src={item.image} alt="" />

                {item.featured && (
                  <span className="badge featured">Featured</span>
                )}
                {item.sale && <span className="badge sale">Sale Offer</span>}

                <div className="heart">♡</div>
                <div className="city">{item.city}</div>
              </div>

              <div className="content">
                <h3>{item.title}</h3>

                <div className="stars">
                  ★★★★★ <span>({item.reviews} Review)</span>
                </div>

                <div className="location">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{item.location}</span>
                </div>

                <div className="bottom">
                  <button>View Details</button>
                  <p className="price">${item.price}.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }





export default Restaurans
