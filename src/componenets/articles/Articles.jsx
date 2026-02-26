import React from "react";
import "./Articles.css";
import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Container from "/public/Container.png";
import container2 from "/public/2.png";
import container3 from "/public/3.png";
function Articles() {
  return (
    <>
      <div className="texts">
        <h4>Blog And Article</h4>
        <h1>Latest News & Articles</h1>
        <p>
          Are you tired of the typical tourist destinations and looking to step
          out of your comfort zonetravel
        </p>
      </div>

      <div className="cardss">
        <div className="cards">
          <div className="card1">
            <img src={Container} alt="" />
            <button>Spiritual & Wellness</button>
            <h2>Coastal Cruise: Seaside Tours for Beach Buffs</h2>
            <div className="kalendar-clock">
              <div className="kalendar-text">
                <FaCalendar />
                <p> 15th Jan, 2025</p>
              </div>
              <div className="clock-text">
                <FaClock />
                <p> 4 min in read</p>
              </div>
            </div>
          </div>
          <div className="cards2">
            <div className="card2">
              <img src={container2} alt="" />
              <div className="card2-sun">
                <button>Urban & Culture</button>
                <h2>10 Safest Destinations for Solo Female</h2>
                <div className="kalendar-clock">
                  <div className="kalendar-text">
                    <FaCalendar />
                    <p> 15th Jan, 2025</p>
                  </div>
                  <div className="clock-text">
                    <FaClock />
                    <p> 4 min in read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card2">
              <img src={container3} alt="" />
              <div className="card2-son2">
                <button>Polar & Glacier</button>
                <h2>Three of the Best Day Trips to Make from Francisco</h2>
                <div className="kalendar-clock">
                  <div className="kalendar-text">
                    <FaCalendar />
                    <p> 15th Jan, 2025</p>
                  </div>
                  <div className="clock-text">
                    <FaClock />
                    <p> 4 min in read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
