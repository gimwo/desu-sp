import React, { useState, useEffect, useContext } from 'react';
import "../../styles/prst5.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
import UCMenu from "../UCMenu";
import Hylok from "../slider/Hylok";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import BarcodeEffect from "../brcd/BarcodeEffect";

const PT5 = () => {
  const { color, setColor } = useContext(ColorContext); // Get color and setColor from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('psot5');
  const [clickedLink, setClickedLink] = useState(null);
  const [nextLinkIndex, setNextLinkIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const linkTexts = [
    { text: 'Ship oil tankerS', set: 'psot5' },
  ];

  // Handle glitch change and link click
  const handleGlitchChange = (newSet, index) => {
    setImageSet(newSet);
    setGlitch(true);
    setClickedLink(index);
    clearTimeout(timeoutId);
    setTimeout(() => setGlitch(false), 500);

    const timeout = setTimeout(() => {
      const nextIndex = (index + 1) % linkTexts.length;
      setNextLinkIndex(nextIndex);
    }, 4000);

    setTimeoutId(timeout);
  };

  // Persist color to localStorage when it changes
  useEffect(() => {
    if (color) {
      localStorage.setItem('color', JSON.stringify(color));
    }
  }, [color]);

  // Retrieve color from localStorage on component mount
  useEffect(() => {
    const storedColor = localStorage.getItem('color');
    if (storedColor) {
      setColor(JSON.parse(storedColor));
    }
  }, [setColor]);

  useEffect(() => {
    if (nextLinkIndex !== null) {
      const timeout = setTimeout(() => {
        if (!isHovered) {
          const nextLink = linkTexts[nextLinkIndex];
          handleGlitchChange(nextLink.set, nextLinkIndex);
        }
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [nextLinkIndex, isHovered]);

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Automatically click the first featured link on page load
  useEffect(() => {
    if (linkTexts.length > 0) {
      handleGlitchChange(linkTexts[0].set, 0);
    }
  }, []);

  return (
    <div className="text-table-wglitch-wj6 pressure-bg">
      <UCMenu />
      <div className="center-container">
        <div>
          <table className="rajdhani-regular">
            <div
              className="grid-lines-overlay-wj4"
              style={{ zIndex: -2, backgroundImage: `url(${gridLinesImage})`, backgroundSize: '100%', opacity: 0.5 }}
            />
            <tbody>
              <tr>
                <td className="featured-text" style={{ color: color?.color }}>Featured Use Cases</td>
              </tr>
              {linkTexts.map((link, index) => (
                <tr key={index}>
                  <td>
                    <span
                      onClick={() => handleGlitchChange(link.set, index)}
                      onMouseEnter={() => handleHover(true)}
                      onMouseLeave={() => handleHover(false)}
                      className={`featured-link ${clickedLink === index ? 'loading-underline' : ''}`}
                      style={{
                        '--loading-line-color': color?.color,
                        '--hover-color': color?.color
                      }}
                    >
                      {link.text}
                    </span>
                    {clickedLink === index && <div className="loading-line" style={{ backgroundColor: color?.color }}></div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={`glitch ${glitch ? `glitch-active-${imageSet}` : `glitch-static-${imageSet}`}`}></div>
          <h3 className="sub-heading orbitron" style={{ color: color?.color }}>HIGH PRESSURE FITTINGS</h3>
          <h1 className="main-heading rajdhani-medium">LIQUEFIED NATURAL GAS</h1>
        </div>

        <div className="divider"></div>
        <Hylok />
        <div className="divider"></div>

        <div className="product-content">
          <div className="section section-bg-prst3">
            <div className="column image-column">
              <p className='barcode pt-lc-25'>INSTRUMENT FITTINGS</p>
              <img src={require("../../assets/images/pressure/prst5/NWJP.png")} alt="Placeholder" className='p-image-pt5 p-image1-spacing'/>
            </div>
            <div className="column text-column rajdhani-semibold">
              <p className='list-paragraph-1'>Engineered for durability and reliability, offering corrosion-resistant and leak-proof solutions for marine environments.</p>
              <ul>
                <li className='bullet-list left-spacing-1'>Corrosion Resistant: Withstands harsh marine environments.</li>
                <li className='bullet-list left-spacing-1'>Leak-Proof Design: Ensures secure and reliable connections</li>
                <li className='bullet-list left-spacing-1'>Durable Build: Engineered for long-term heavy-duty use</li>
                <li className='bullet-list left-spacing-1'>High Pressure: Handles extreme pressure conditions safely</li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
      <Contact />
      <Footer />
      <BarcodeEffect />
    </div>
  );
};

export default PT5;
