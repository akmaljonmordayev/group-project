import React from "react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa"; 
import logo from "../../assets/logo.png";
import orqaBackground from "../../assets/orqafon.jpg"; 
import { IoLocationOutline, IoCalendarOutline, IoSearch } from "react-icons/io5";
import "./Header.css";



function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hero-container" style={{ backgroundImage: `url(${orqaBackground})` }}>
      <header className="main-nav-wrapper">
        <div className="container">
          <nav className="nav-bar">
            <div className="nav-left">
              <img src={logo} alt="logo" className="logo" />
              <div className="logo-texts">
                <span className="logo-title">Travox</span>
                <span className="logo-subtitle">A Travel Agency</span>
              </div>
            </div>

            <div className="nav-center">
              <ul>
                <li><a href="#">Home</a></li>
                <li className="dropdown">
                  <a href="#">Features <IoIosArrowDown className="arrow" /></a>
                </li>
                <li className="dropdown">
                  <a href="#">Pages <IoIosArrowDown className="arrow" /></a>
                </li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="nav-right">
              <div className="cart">
                <AiOutlineShoppingCart className="cart-icon" />
                <span className="cart-badge">0</span>
              </div>
              <button onClick={()=> setIsOpen(true)} className="login-btn">
                <FaUser className="login-icon" />
                <span className="login-text">Login</span>
              </button>
              <div className="divider"></div>
              <div className="hamburger-divider">
                <span></span><span></span><span></span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="showcase-area">
        <div className="container">
          <div className="showcase-content">
            <h4 className="subtitle">Explore Restaurants</h4>
            <h1 className="main-title">Hey! Discover Your Nearest <br /> Restaurants This City</h1>
            
            <div className="glass-search-bar">
  <div className="input-group" style={{ position: "relative" }}>
    <label>Destinations:</label>
    <input type="text" placeholder="Where are you going..." style={{ paddingLeft: "40px" }} />
    <IoLocationOutline 
      style={{
        position: "absolute",
        left: "10px",
        bottom: "10px",
        color: "#5a4f4f",
        fontSize: "22px"
      }} 
    />
  </div>

  <div className="input-group" style={{ position: "relative" }}>
    <label>Check In:</label>
    <input type="text" placeholder="12.00" style={{ paddingLeft: "40px" }} />
    <IoCalendarOutline 
      style={{
        position: "absolute",
        left: "10px",
        bottom: "10px",
        color: "#5a4f4f",
        fontSize: "22px"
      }} 
    />
  </div>

  <div className="input-group" style={{ position: "relative" }}>
    <label>Check Out:</label>
    <input type="text" placeholder="12.10" style={{ paddingLeft: "40px" }} />
    <IoCalendarOutline 
      style={{
        position: "absolute",
        left: "10px",
        bottom: "10px",
        color: "#5a4f4f",
        fontSize: "22px"
      }} 
    />
  </div>

  <div className="input-group" style={{ position: "relative" }}>
    <label>Guest:</label>
    <input type="text" placeholder="+ Add Guests" style={{ paddingLeft: "40px" }} />
    <FaUser 
      style={{
        position: "absolute",
        left: "10px",
        bottom: "10px",
        color: "#5a4f4f",
        fontSize: "18px"
      }} 
    />
  </div>

 <button className="search-submit-btn" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
  <IoSearch style={{ fontSize: "20px" }} />
  <span>Search</span>
</button>
</div>
          </div>
        </div>
      </div>
{isOpen && (
  <div style={modalStyles.overlay}>
    <div style={modalStyles.content}>
      <span style={modalStyles.close} onClick={() => setIsOpen(false)}>
        &times;
      </span>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" style={{ width: "90%", padding: "8px", marginBottom: "10px" }} />
        <input type="password" placeholder="Password" style={{ width: "90%", padding: "8px", marginBottom: "10px" }} />
        <button type="submit" style={{ padding: "8px 20px", cursor: "pointer" }}>Login</button>
      </form>
    </div>
  </div>
)}

    </div>
  );
}

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
    position: "relative",
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "24px",
    cursor: "pointer",
  },
};


export default Header;