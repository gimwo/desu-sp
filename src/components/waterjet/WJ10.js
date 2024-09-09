import React, { useState, useEffect, useContext } from 'react';
import "../../styles/hwj10.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
// import MenuIcon from "../MenuIcon";
import UCMenu from "../UCMenu";
import StaticNSS from "../slider/StaticNSS";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import H2Sec from "../h2sections/H2section";

const WJ10 = () => {
  const { color } = useContext(ColorContext); // Get color from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('hpp10'); // 'g' for g1-g4 and 's' for s1-s4
  const [clickedLink, setClickedLink] = useState(null); // Track clicked link index
  const [nextLinkIndex, setNextLinkIndex] = useState(null); // Track next link index for automatic change
  const [timeoutId, setTimeoutId] = useState(null); // Track timeout ID for clearing
  const [isHovered, setIsHovered] = useState(false); // Track hover state



  



  const linkTexts = [
    { text: 'Power plant', set: 'hpp10' },
    { text: 'Gas tank', set: 'hgt10' },
    { text: 'Oil tank', set: 'hot10' },
  ];

  const handleGlitchChange = (newSet, index) => {
    setImageSet(newSet);
    setGlitch(true);
    setClickedLink(index);
    clearTimeout(timeoutId); // Clear any existing timeout
    setTimeout(() => setGlitch(false), 500); // Duration of the glitch animation

    const timeout = setTimeout(() => {
      const nextIndex = (index + 1) % linkTexts.length;
      setNextLinkIndex(nextIndex);
    }, 4000);

    setTimeoutId(timeout);
  };

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
    <div className="text-table-wglitch-wj10">
      <UCMenu />
      <div className="center-container">
        <div>
          <table className="rajdhani-regular">
            <div
              className="grid-lines-overlay"
              style={{ zIndex: -2, backgroundImage: `url(${gridLinesImage})`, backgroundSize: '100%', opacity: 0.5 }}
            />
            <tbody>
              <tr>
                <td className="featured-text" style={{ color: color.color }}>Featured Use Cases</td>
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
                        '--loading-line-color': color.color, // Set loading line color from context
                        '--hover-color': color.color // Set the hover color from context
                      }}
                    >
                      {link.text}
                    </span>
                    {clickedLink === index && <div className="loading-line"></div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={`glitch ${glitch ? `glitch-active-${imageSet}` : `glitch-static-${imageSet}`}`}></div>
          <h3 className="sub-heading orbitron">HIGH PRESSURE METAL GRINDING</h3>
          <h1 className="main-heading rajdhani-medium">COLD CUTTING</h1>
        </div>

        <div className="divider"></div>
        <StaticNSS />
        <div className="divider"></div>


       
      
      <div className="divider"></div>
      
      <H2Sec />

      <div className="divider"></div>

      <div className="product-content">
      <div className="section section-bg">
        <div className="column image-column">
        <p className='barcode wj-brcd101'>STONEAGE JACK TRACK</p>
          <img src={require("../../assets/images/hydro/hwj10/SJT.png")} alt="Placeholder" className='p-image-sl p-image-sl-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1 left-spacing-1'>Accessory designed for internal pipe cleaning, effectively removing debris from pipe surfaces. Its robust design and advanced mechanism ensure efficient and thorough cleaning in various pipe sizes.</p>
          <ul>
            <li className='bullet-list left-spacing-1'>Internal Cleaning: Removes debris from pipe surfaces</li>
            <li className='bullet-list left-spacing-1'>Robust Design: Built for demanding cleaning tasks</li>
            <li className='bullet-list left-spacing-1'>Effective Operation: Improves cleaning speed and effectiveness</li>
            <li className='bullet-list left-spacing-1'>Durable Construction: Withstands harsh cleaning environments</li>
          </ul>
        </div>
      </div>
    </div>


      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default WJ10;
