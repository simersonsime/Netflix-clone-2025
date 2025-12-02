import React from "react";
import "./Footer.css";

// MUI Icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        {/* Social Icons */}
        <div className="footer_icons">
          <a href="#">
            <FacebookOutlinedIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <YouTubeIcon />
          </a>
        </div>

        {/* Footer Links */}
        <div className="footer_data">
          <a href="#">Audio Description</a>
          <a href="#">Investor Relations</a>
          <a href="#">Legal Notice</a>
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Gift Cards</a>
          <a href="#">Terms of Use</a>
          <a href="#">Corporate Information</a>
          <a href="#">Media Center</a>
          <a href="#">Privacy</a>
          <a href="#">Contact Us</a>
          <a href="#">Service Code</a>
        </div>

        <p className="footer_bottom_text">© 1997–2025 Netflix, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
