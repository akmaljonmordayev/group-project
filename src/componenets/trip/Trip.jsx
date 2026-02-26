import React from "react";
import "./Trip.css";
import trip1 from "/public/trip1.png";
import trip2 from "/public/trip2.png";
import trip3 from "/public/trip3.png";

function Trip() {
  return (
    <div className="trip-section">
      <div className="trip-container">
        <div className="trip-left">
          <p className="trip-tag">Dream Your Next Trip</p>
          <h1 className="trip-heading">
            Discover When Even
            <br />
            You Want To Go
          </h1>

          <div className="trip-grid">
            <div className="trip-img top-left">
              <img src={trip1} alt="cafe" />
            </div>
            <div className="trip-img right-tall">
              <img src={trip3} alt="restaurant" />
            </div>
            <div className="trip-img bottom-left">
              <img src={trip2} alt="interior" />
            </div>

            <div className="trip-badge">
              <svg width="84" height="84" viewBox="0 0 84 84">
                <circle cx="42" cy="42" r="42" fill="#7C3AED" />
                <defs>
                  <path
                    id="textCircle"
                    d="M42,42 m-29,0 a29,29 0 1,1 58,0 a29,29 0 1,1 -58,0"
                  />
                </defs>
                <text
                  fontSize="6.2"
                  fill="white"
                  letterSpacing="2.2"
                  fontWeight="500"
                >
                  <textPath href="#textCircle" startOffset="0%">
                    SINCE 1994 THE BEST RESTAURANT{" "}
                  </textPath>
                </text>
                <text
                  x="42"
                  y="49"
                  textAnchor="middle"
                  fill="white"
                  fontSize="20"
                  fontWeight="300"
                >
                  ↗
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="trip-right">
          <p className="trip-desc">
            Are You Tired Of The Typical Tourist Destinations And Looking R
            Comfort Zon. Adventure.Are You Tirehe Typical Touriststin Ations And
            Looking Are You Tired Of The Typical Tourist De Stinations And
            Looking Re You Tired Of The.
          </p>

          <div className="trip-features">
            <div className="trip-feature">
              <div className="trip-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12 7v5l3 2"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 12a5 5 0 0 1 5-5"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="trip-feature-title">Best Price Guarantee</h3>
                <p className="trip-feature-desc">
                  Are you tired of the typical tourist destinatio and looking
                  step out of your comfort.
                </p>
              </div>
            </div>

            <div className="trip-feature">
              <div className="trip-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                  />
                  <path d="M3 10h18" stroke="#7C3AED" strokeWidth="1.8" />
                  <path
                    d="M8 15l3 3 5-5"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="trip-feature-title">Easy & Quick Booking</h3>
                <p className="trip-feature-desc">
                  Are you tired of the typical tourist destinatio and looking
                  step out of your comfort.
                </p>
              </div>
            </div>

            <div className="trip-feature">
              <div className="trip-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="7"
                    y="3"
                    width="10"
                    height="13"
                    rx="2"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="17"
                    cy="18"
                    r="4.5"
                    fill="#f3f0ff"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M15.5 18l1.2 1.2 2.3-2.3"
                    stroke="#7C3AED"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="trip-feature-title">Secure Journey With Us</h3>
                <p className="trip-feature-desc">
                  Are you tired of the typical tourist destinatio and looking
                  step out of your comfort.
                </p>
              </div>
            </div>
          </div>

          <button className="trip-btn">BOOK YOUR TRIP →</button>
        </div>
      </div>
    </div>
  );
}

export default Trip;
