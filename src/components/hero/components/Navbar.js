import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import PageContext from "../../../context/PageContext";
import ColorContext from "../../../context/ColorContext";
import "../../../styles/styles.css";

function Navbar() {
  const { color } = useContext(ColorContext);
  const { page, setPage } = useContext(PageContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(location.pathname === "/menu");
  }, [location.pathname]);

  const toggleMenu = () => {
    if (isOpen) {
      navigate(-1); // Go back
    } else {
      setIsOpen(true);
      navigate("/menu");
    }
  };

  return (
    <nav>
      <ul className="nav-bar">
        <li id="use-case">
          {page === "" ? (
            <span
              className="use-case-btn relative rajdhani-semibold"
              onClick={() => {
                navigate("/use-cases");
                setPage("use-cases");
              }}
            >
              &lt; &lt; Use Cases
            </span>
          ) : (
            <span className="use-case-btn"></span>
          )}
        </li>

        <div 
          className={`menu-icon ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <div className="bar1" style={{ backgroundColor: color.color }}></div>
          <div className="bar2" style={{ backgroundColor: color.color }}></div>
          <div className="bar3" style={{ backgroundColor: color.color }}></div>
        </div>

      </ul>
    </nav>
  );
}

export default Navbar;
