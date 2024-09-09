import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import MenuIcon from "../components/MenuIcon";
import SvgIcons from "../components/SvgIcons";
import ColorContext from "../context/ColorContext";

export default function MenuPage() {
  const { color } = useContext(ColorContext);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleProductClick = () => {
    navigate("/use-cases");
  };

  // HOVER
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    color: "transparent",
    WebkitTextStroke: `1px ${color.color}`,
    transition: "color 0.3s", // Add transition for smooth effect
  };

  const hoverStyle = {
    color: color.color,
    WebkitTextStroke: `1px ${color.color}`,
    textShadow: `0px 0px 31px ${color.color}`,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="menu-bg">
      <MenuIcon />
      <div className="vertical-line left-line"></div>
      <div className="vertical-line right-line"></div>
      <div className="menu-container">
        <p
          className="menu-link menu-3d rajdhani-medium-menu"
          style={isHovered ? hoverStyle : baseStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          &gt; Back to 3d World
        </p>
        <p
          className="menu-link rajdhani-medium-menu"
          onClick={handleProductClick}
        >
          Projects
        </p>
        <p className="menu-link rajdhani-medium-menu">Blog</p>
        <p
          className="menu-link rajdhani-medium-menu"
          onClick={handleContactClick}
        >
          Contact
        </p>
      </div>
      <SvgIcons />
    </div>
  );
}
