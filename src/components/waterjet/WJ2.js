import React, { useState, useEffect, useContext } from 'react';
import "../../styles/hwj2.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
import UCMenu from "../UCMenu";
import StaticNSC from "../slider/StaticNSC";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import H2Sec from "../h2sections/H2section";

const WJ2 = () => {
  const { color } = useContext(ColorContext); // Get color from ColorContext
  const [currentSlide, setCurrentSlide] = useState(0);
  const { page, setPage } = useContext(PageContext);
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('hr2'); // 'g' for g1-g4 and 's' for s1-s4
  const [clickedLink, setClickedLink] = useState(null); // Track clicked link index
  const [nextLinkIndex, setNextLinkIndex] = useState(null); // Track next link index for automatic change
  const [timeoutId, setTimeoutId] = useState(null); // Track timeout ID for clearing
  const [isHovered, setIsHovered] = useState(false); // Track hover state



  //SLIDE DOTS
  const slides = [
    require("../../assets/images/univ/x4.webp"),

  ];
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    setPage(() => "");
  }, [setPage]);



  const linkTexts = [
    { text: 'Roads', set: 'hr2' },
    { text: 'Bridges', set: 'hb2' },
    { text: 'Runways', set: 'hrw2' },
    { text: 'Ports', set: 'hp2' },
    { text: 'Quays', set: 'hq2' },
    { text: 'Parking Decks', set: 'hpd2' },
    { text: 'Dams', set: 'hd2' },
    { text: 'Pillars', set: 'hpl2' },
    { text: 'Tunnels', set: 'ht2' }
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
          <h3 className="sub-heading orbitron">CONCRETE REPAIR</h3>
          <h1 className="main-heading rajdhani-medium">SURFACE PREPARATION</h1>
        </div>

        <div className="divider"></div>
        <StaticNSC />
        <div className="divider"></div>

              <H2Sec />
        

      
      <div className="divider"></div>



      <div className="product-content">
        <div className="section section-bg-prst3">
        <div className="column image-column">
        <p className='barcode wj-brcd12'>Conjet Robot 101 Nalta</p>
          <img src={require("../../assets/images/univ/x4.png")} alt="Placeholder" className='p-image-sl p-image-sl-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1'>Offers precise, efficient hydro demolition with its semi-automated control and advanced technology. Its rugged construction and intuitive design ensure reliable performance and reduced operator fatigue.</p>
          <ul>
            <li className='bullet-list left-spacing-wj12'>Advanced Technology: Uses state-of-the-art methods.</li>
            <li className='bullet-list left-spacing-wj12'>Rugged Construction: Withstands harsh conditions</li>
            <li className='bullet-list left-spacing-wj12'>Semi-Automated Control: Enhances efficiency and accuracy.</li>
            <li className='bullet-list left-spacing-wj12'>Versatile Applications: Ideal for all demolition tasks.</li>
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

export default WJ2;
