import React, { useState, useEffect, useContext } from 'react';
import "../../styles/envr5.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
import UCMenu from "../UCMenu";
import Haskel from "../slider/Haskel";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import BarcodeEffect from "../brcd/BarcodeEffect";

const EV5 = () => {
  const { color, setColor } = useContext(ColorContext); // Get color and setColor from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('ep5');
  const [clickedLink, setClickedLink] = useState(null);
  const [nextLinkIndex, setNextLinkIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const linkTexts = [
    { text: 'Ports', set: 'ep5' },
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
    <div className="text-table-wglitch-wj6 environmental-bg">
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
          <h3 className="sub-heading orbitron" style={{ color: color?.color }}>Freshwater Solution</h3>
          <h1 className="main-heading rajdhani-medium">Desalination Systems</h1>
        </div>

        <div className="divider"></div>
        <Haskel />
        <div className="divider"></div>

        <div className="product-content">
          <div className="section section-bg-prst3">
            <div className="column image-column">
              <p className='barcode bls-ev45'>Desalination Systems</p>
              <img src={require("../../assets/images/environmental/envr5/ev51.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
            </div>
            <div className="column text-column rajdhani-semibold">
              <p className='list-paragraph-1'>Offer efficient and high-capacity desalination of water, effectively removing salt and impurities with energy-efficient technology. </p>
              <ul>
                <li className='bullet-list-ev45'>Efficient Desalination: Removes salt and impurities effectively</li>
                <li className='bullet-list-ev45'>High Capacity: Handles large volumes of water efficiently</li>
                <li className='bullet-list-ev45'>Energy Efficient: Lowers operational costs with minimal energy use</li>
                <li className='bullet-list-ev45'>Compact Design: Fits in various installation spaces easily</li>
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

export default EV5;
