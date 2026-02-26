import "./Footer.css";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoCall, IoLocation } from "react-icons/io5";
import appDownload from "../../assets/app-download.png";
import logo from "../../assets/Tourex logo.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      {/* DOWNLOAD SECTION */}
      <div className="download-box">
        <div className="download-left">
          <div className="phone-images">
            <img
              src={appDownload}
              alt="App Download"
              className="overlap-phone"
            />
          </div>

          <div className="download-text">
            <p className="small-text">Explore Tour</p>
            <h2>
              Download Our App <br />
              From Google & App Store!
            </h2>
          </div>
        </div>

        <div className="download-right">
          <button className="store-btn">Google Play</button>
          <button className="store-btn">App Store</button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="col">
          <div className="logo">
            <img src={logo} alt="Tourex Logo" />
          </div>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="newsletter">
            <input type="text" placeholder="Enter your mail" />
            <button>→</button>
          </div>
        </div>

        <div className="col">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Blogs</p>
          <p>Contact Us</p>
        </div>

        <div className="col">
          <h3>Information</h3>
          <p>
            <IoLocation /> Los Angeles, CA, USA
          </p>
          <p>
            <IoCall /> 123-343-4444
          </p>
          <p>
            <MdOutlineAccessTimeFilled /> Mon - Sat: 8 AM - 5 PM
          </p>
        </div>

        <div className="col">
          <h3>Utility Pages</h3>
          <p>Team</p>
          <p>Shop</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Faq</p>
        </div>
      </div>

      <div className="copyright">
        Copyright 2025, Tourex All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;