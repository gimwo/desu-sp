import React, { useState, useEffect, useContext } from 'react';
import "../../styles/hwj1.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
// import MenuIcon from "../MenuIcon";
import UCMenu from "../UCMenu";
import StaticNSC from "../slider/StaticNSC";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import WJ1S from "../dotparts/WJ1S";
import H2Sec from "../h2sections/H2section";

const WJ1 = () => {
  const { color } = useContext(ColorContext); // Get color from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('hroad'); // 'g' for g1-g4 and 's' for s1-s4
  const [clickedLink, setClickedLink] = useState(null); // Track clicked link index
  const [nextLinkIndex, setNextLinkIndex] = useState(null); // Track next link index for automatic change
  const [timeoutId, setTimeoutId] = useState(null); // Track timeout ID for clearing
  const [isHovered, setIsHovered] = useState(false); // Track hover state



  



  const linkTexts = [
    { text: 'Roads', set: 'hroad' },
    { text: 'Bridges', set: 'hbridge' },
    { text: 'Runways', set: 'hrunway' },
    { text: 'Ports', set: 'hport' },
    { text: 'Quays', set: 'hquay' },
    { text: 'Parking Decks', set: 'hpdecks' },
    { text: 'Dams', set: 'hdam' },
    { text: 'Pillars', set: 'hpillar' },
    { text: 'Tunnels', set: 'htunnel' }
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
    <div className="text-table-wglitch">
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
          <h3 className="sub-heading orbitron">CONCRETE REMOVAL</h3>
          <h1 className="main-heading rajdhani-medium">HYDRO DEMOLITION</h1>
        </div>

        <div className="divider"></div>
        <StaticNSC />
        <div className="divider"></div>

              <H2Sec />
        

      
      <div className="divider"></div>


      <WJ1S/>
      
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default WJ1;
