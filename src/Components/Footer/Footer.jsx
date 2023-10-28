import React from "react";
import "./Footer.css"


function Footer() {
  return (
    <footer>
      {/* <div className="top-panel">
      <div className="footer-logo"></div>
      </div> */}
      
      <div className="container">
            <div className="footer-content">
                <h3>Contact Us</h3>
                <p>Email:Info@example.com</p>
                <p>Phone:+121 56556 565556</p>
                <p>Address:Your Address 123 street</p>
            </div>
            <div className="footer-content">
                <h3>Quick Links</h3>
                 <ul className="list">
                    <li><a className="footer-anchor" href="https://google.com">Home</a></li>
                    <li><a className="footer-anchor" href="https://google.com">About</a></li>
                    <li><a className="footer-anchor" href="https://google.com">Services</a></li>
                    <li><a className="footer-anchor" href="https://google.com">Products</a></li>
                    <li><a className="footer-anchor" href="https://google.com">Contact</a></li>
                 </ul>
            </div>
            <div className="footer-content">
                <h3>Follow Us</h3>
                <ul className="social-icons">
                 <li><a className="footer-anchor" href="https://google.com"><i className="bx bxl-linkedin"></i></a></li>
                 <li><a className="footer-anchor" href="https://google.com"><i className="bx bxl-instagram"></i></a></li>
                 <li><a className="footer-anchor" href="https://google.com"><i className="bx bxl-twitter"></i></a></li>
                 <li><a className="footer-anchor" href="https://google.com"><i className="bx bxl-youtube"></i></a></li>
                 <li><a className="footer-anchor" href="https://google.com"><i className="bx bxl-facebook"></i></a></li>
                </ul>
                </div>
      </div>
      <div className="bottom-bar">
            <p>&copy; PCCOE ACM . All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;