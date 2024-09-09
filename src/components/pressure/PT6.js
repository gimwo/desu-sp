import React, { useState, useEffect, useContext } from 'react';
import "../../styles/prst6.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
import UCMenu from "../UCMenu";
import Haskel from "../slider/Haskel";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import BarcodeEffect from "../brcd/BarcodeEffect";

const PT6 = () => {
  const { color, setColor } = useContext(ColorContext); // Get color and setColor from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('ppp6');
  const [clickedLink, setClickedLink] = useState(null);
  const [nextLinkIndex, setNextLinkIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const linkTexts = [
    { text: 'POWER PLANTS', set: 'ppp6' },
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
              className="grid-lines-overlay-pt"
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
          <h3 className="sub-heading orbitron" style={{ color: color?.color }}>HIGH PRESSURE MAINTENANCE</h3>
          <h1 className="main-heading rajdhani-medium">POWER PLANT</h1>
        </div>

        <div className="divider"></div>
        <Haskel />
        <div className="divider"></div>

        <div className="product-content">
          <div className="section section-bg-prst1">
            <div className="column image-column">
              <p className='barcode pt-lc-26'>AIR MANIFOLDS</p>
              <img src={require("../../assets/images/pressure/prst6/AM.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
            </div>
            <div className="column text-column rajdhani-semibold">
              <p className='list-paragraph-1 left-spacing-1'>efficient and reliable air distribution in various industrial applications. durable and easy installation process ideal for optimizing airflow</p>
              <ul>
                <li className='bullet-list pt6-bls-s1'>Compact Design: Efficiently integrates into tight spaces</li>
                <li className='bullet-list pt6-bls-s1'>Durable Construction: Built to withstand rugged environments.</li>
                <li className='bullet-list pt6-bls-s1'>Leak-Free Operation: Ensures secure and reliable connections</li>
                <li className='bullet-list pt6-bls-s1'>Versatile Configuration: Adapts to various air needs</li>
              </ul>
            </div>
          </div>

          <div className="divider"></div>
          <div className="section section-bg-prst2">
            <div className="column text-column rajdhani-semibold">
              <p className='list-paragraph-2'>Offer durable and secure storage solutions for sensitive instruments. With a modular design and temperature control features, these cabinets ensure optimal protection and easy access in various industrial settings.</p>
              <ul>
                <li className='bullet-list left-spacing-pt26'>Robust Construction: Ensures durability in harsh environments</li>
                <li className='bullet-list left-spacing-pt26'>Secure Storage: Locks instruments for protection.</li>
                <li className='bullet-list left-spacing-pt26'>Modular Design: Allows flexible and customizable setups</li>
                <li className='bullet-list left-spacing-pt26'>Temperature Control: Keeps instruments at optimal conditions.</li>
              </ul>
            </div>
            <div className="column image-column spir-barcode">
              <p className='barcode pt6-brcd-s2'>INSTRUMENT CABINET</p>
              <img src={require("../../assets/images/pressure/prst6/IC.png")} alt="Placeholder" className='p-image1'/>
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

export default PT6;
