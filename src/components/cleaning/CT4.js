import React, { useState, useEffect, useContext } from 'react';
import "../../styles/clt4.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
import UCMenu from "../UCMenu";
import Klenco from "../slider/Klenco";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import CT4S from "../dotparts/CT4S";
import BarcodeEffect from "../brcd/BarcodeEffect";

const CT4 = () => {
  const { color } = useContext(ColorContext); // Get color from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('cst4'); // 'g' for g1-g4 and 's' for s1-s4
  const [clickedLink, setClickedLink] = useState(null); // Track clicked link index
  const [nextLinkIndex, setNextLinkIndex] = useState(null); // Track next link index for automatic change
  const [timeoutId, setTimeoutId] = useState(null); // Track timeout ID for clearing
  const [isHovered, setIsHovered] = useState(false); // Track hover state




  const linkTexts = [
    { text: 'Roads', set: 'cst4' },
    { text: 'Bridges', set: 'csw4' },
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
    <div className="text-table-wglitch-wj3 cleaning-bg">
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
          <div className={`glitch-ct1 ${glitch ? `glitch-active-${imageSet}` : `glitch-static-${imageSet}`}`}></div>
          <h3 className="sub-heading orbitron" style={{ color: color.color }}>Advanced pavement cleaning technology</h3>
          <h1 className="main-heading rajdhani-medium">INNOVATIVE CLEANING TECHNOLOGIES</h1>
        </div>

        <div className="divider"></div>
        <Klenco />
        <div className="divider"></div>








        <div className="product-content">
        <div className="section section-ct1">
        <div className="column image-column">
        <p className='barcode ct4-brcd-s1'>Ecobot Sweeper 111</p>
          <img src={require("../../assets/images/cleaning/ct4/ct41.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1'>Features smart navigation and high suction power for thorough and efficient cleaning in complex environments. Its compact design, long battery life, and user-friendly controls enhance usability.</p>
          <ul>
            <li className='bullet-list ct4-bls-s1'>Smart Navigation: Efficiently maps and cleans complex areas</li>
            <li className='bullet-list ct4-bls-s1'>High Suction Power: Removes dust and debris thoroughly</li>
            <li className='bullet-list ct4-bls-s1'>Durable Construction: Built to handle heavy-duty cleaning tasks</li>
            <li className='bullet-list ct4-bls-s1'>User-Friendly Controls: Easy-to-use interface for seamless operation</li>
          </ul>
        </div>
      </div>


      <div className="divider"></div>
      <div className="section section-ct2">
      <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-2 ct4-p-s2'>Engineered for efficiency, offering powerful sweeping and advanced dust control to handle large areas with ease. Its compact size and durable build ensure reliable performance in various environments. </p>
          <ul>
            <li className='bullet-list ct4-bls-s2'>Long Battery Life: Offers extended runtime for continuous cleaning</li>
            <li className='bullet-list ct4-bls-s2'>Durable Build: Constructed for heavy-duty, long-lasting performance</li>
            <li className='bullet-list ct4-bls-s2'>Efficient Sweeping: Cleans large areas quickly and effectively</li>
            <li className='bullet-list ct4-bls-s2'>Compact Size: Easily navigates tight spaces and narrow aisles</li>
          </ul>
        </div>
        <div className="column image-column spir-barcode">
            <p className='barcode ct4-brcd-s2'>MADVAC LN50</p>
          <img src={require("../../assets/images/cleaning/ct4/ct42.png")} alt="Placeholder" className='p-image1'/>
        </div>
      </div>

      
      <div className="divider"></div>

      






    <CT4S />
      </div>

      </div>
      <Contact />
      <Footer />
      <BarcodeEffect />
    </div>
  );
};

export default CT4;
