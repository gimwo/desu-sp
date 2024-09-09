import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ColorContext from '../context/ColorContext';
import '../styles/styles.css';

export default function MenuIcon() {
    const { color } = useContext(ColorContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Check the current location to set the initial state of the menu icon
        if (location.pathname === "/menu") {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        if (isOpen) {
            navigate(-1); // Go back to the previous page
        } else {
            setIsOpen(true);
            navigate("/menu");
        }
    };

    return (
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar1" style={{ backgroundColor: color.color }}></div>
            <div className="bar2" style={{ backgroundColor: color.color }}></div>
            <div className="bar3" style={{ backgroundColor: color.color }}></div>
        </div>
    );
}
