import React from 'react';
import '../App.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 MyOnlineMeal.com. All rights reserved.</p>
        <div className="social-icons">
          {/* Add your social media icons here */}
          <a  className="icon" style={{color:'goldenrod'}} onClick={ ()=>{window.open("https://www.facebook.com/kushal.khandelwal.357", '_blank');}}><i className="fab fa-facebook-f"></i></a>
          <a  className="icon" style={{color:'goldenrod'}}><i className="fab fa-github" onClick={ ()=>{window.open("https://github.com/kush123445/", '_blank');}}></i></a>
          <a  className="icon" style={{color:'goldenrod'}} onClick={ ()=>{window.open("https://www.instagram.com/kushal___khandelwal/", '_blank');}}><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
