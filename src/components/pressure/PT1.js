import React, { useState, useEffect, useContext } from 'react';
import "../../styles/prst1.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import UCMenu from "../UCMenu";
import Haskel from "../slider/Haskel";
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import BarcodeEffect from "../brcd/BarcodeEffect";


const PT1 = () => {
  const { color } = useContext(ColorContext); // Get color from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('pop1'); // 'g' for g1-g4 and 's' for s1-s4
  const [clickedLink, setClickedLink] = useState(null); // Track clicked link index
  const [nextLinkIndex, setNextLinkIndex] = useState(null); // Track next link index for automatic change
  const [timeoutId, setTimeoutId] = useState(null); // Track timeout ID for clearing
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const linkTexts = [
    { text: 'Offshore plants', set: 'pop1' },
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
                    {clickedLink === index && <div className="loading-line" style={{ backgroundColor: color.color }}></div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={`glitch ${glitch ? `glitch-active-${imageSet}` : `glitch-static-${imageSet}`}`}></div>
          <h3 className="sub-heading orbitron" style={{ color: color.color }}>SPECIALIZED SYSTEMS AND SUPPORT</h3>
          <h1 className="main-heading rajdhani-medium">HYDRAULICS AND PRESSURE </h1>
        </div>

        <div className="divider"></div>
        <Haskel />
        <div className="divider"></div>

        <div className="product-content">
          <div className="section section-bg-prst1">
            <div className="column ">
              <p className='barcode pt1-brcd-s1'>TEST PACK SYSTEMS</p>
              <img src={require("../../assets/images/pressure/prst1/PTPS.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
            </div>
            <div className="column text-column rajdhani-semibold">
              <p className='list-paragraph-1'>Designed for precise and reliable high-pressure testing across various applications. Its robust, compact design offers efficient performance while simplifying maintenance for prolonged durability.</p>
              <ul>
                <li className='bullet-list-pt pt1-bls-s1'>High Pressure: Delivers precise, efficient testing.</li>
                <li className='bullet-list-pt pt1-bls-s1'>Durable Construction: Built to endure demanding conditions</li>
                <li className='bullet-list-pt pt1-bls-s1'>Compact Design: Maximizes space without sacrificing performance.</li>
                <li className='bullet-list-pt pt1-bls-s1'>Easy Maintenance: Streamlines upkeep and extends lifespan</li>
              </ul>
            </div>
          </div>

          <div className="divider"></div>
          <div className="section section-bg-prst2">
            <div className="column text-column rajdhani-semibold">
              <p className='list-paragraph-2'>Provide a hydraulic power source for pressure generation and remote operation, ideal for pressure testing applications. Their advanced design ensures precise and reliable performance in various testing scenarios.</p>
              <ul>
                <li className='bullet-list pt1-bls-s2'>Hydraulic Power Source: Delivers steady testing pressure.</li>
                <li className='bullet-list pt1-bls-s2'>Pressure Generation: Efficiently generates high pressure levels</li>
                <li className='bullet-list pt1-bls-s2'>Remote Operation: Operated from a distance for convenience</li>
                <li className='bullet-list pt1-bls-s2'>Reliable Performance: Ensures accurate, dependable results.</li>
              </ul>
            </div>
            <div className="column spir-barcode">
              <p className='barcode pt1-brcd-s2'>HASKEL MODEL J24352</p>
              <img src={require("../../assets/images/pressure/prst1/PHM.png")} alt="Placeholder" className='p-image1'/>
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

export default PT1;
