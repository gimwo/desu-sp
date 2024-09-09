import React, { useState, useEffect, useContext } from 'react';
import "../../styles/hwj4.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
import UCMenu from "../UCMenu";
import StaticN from "../slider/StaticN";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import BarcodeEffect from "../brcd/BarcodeEffect";

const WJ4 = () => {
  const { color } = useContext(ColorContext); // Get color from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('hr4'); // 'g' for g1-g4 and 's' for s1-s4
  const [clickedLink, setClickedLink] = useState(null); // Track clicked link index
  const [nextLinkIndex, setNextLinkIndex] = useState(null); // Track next link index for automatic change
  const [timeoutId, setTimeoutId] = useState(null); // Track timeout ID for clearing
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const linkTexts = [
    { text: 'Roads', set: 'hr4' },
    { text: 'Runways', set: 'hrw4' },
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
    <div className="text-table-wglitch-wj3">
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
          <h3 className="sub-heading orbitron">REMOVAL OF ROAD MARKINGS / RUBBER DEPOSITS</h3>
          <h1 className="main-heading rajdhani-medium">SURFACE PREPARATION</h1>
        </div>

        <div className="divider"></div>
        <StaticN />
        <div className="divider"></div>

        <div className="product-content">
          <div className="section section-bg-prst2">
            <div className="column">
              <p className='barcode wj4-brcd-s1'>NLB StarJet SRV-7</p>
              <img src={require("../../assets/images/hydro/hwj4/hw4.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
            </div>
            <div className="column1 text-column rajdhani-semibold">
              <p className='list-paragraph-1'>Powerful prime mover designed to pump water to hydro demolition accessories. Its robust performance and high efficiency ensure reliable water delivery for optimal accessory operation.</p>
              <ul>
                <li className='bullet-list'>High Pressure: Delivers powerful water flow efficiently</li>
                <li className='bullet-list'>Reliable Performance: Consistent for demanding tasks.</li>
                <li className='bullet-list'>Efficient Pumping: Maximizes water delivery to accessories</li>
                <li className='bullet-list'>Versatile Application: Fits various hydro demolition needs.</li>
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

export default WJ4;
