import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; // Ensure this includes the new CSS
import ColorContext from '../context/ColorContext';

import EmailIcon from '../assets/images/univ/EmailIcon';
import LinkedInIcon from '../assets/images/univ/LinkedinIcon';
import InstagramIcon from '../assets/images/univ/InstagramIcon';

export default function SVGIcons() {
  const { color } = useContext(ColorContext); // Accessing color context
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="icons-container">
      {/* Hover effect for Email Icon */}
      <div
        className="email-icon-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to="https://mail.google.com/">
          <EmailIcon color={color.color} />
        </Link>

        {/* Display text when hovered, passing color from ColorContext */}
        {isHovered && (
          <div
            className="scroll-text"
            style={{ 
              borderColor: color.color, // Dynamically set border color
              color: color.color // Dynamically set text color
            }}
          >
            admin@dezu.ph
          </div>
        )}
      </div>
    </div>
  );
}
