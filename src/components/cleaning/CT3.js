import React, { useState, useEffect, useContext } from 'react';
import "../../styles/clt3.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
import UCMenu from "../UCMenu";
import Klenco from "../slider/Klenco";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import CT3S from "../dotparts/CT3S";
import BarcodeEffect from "../brcd/BarcodeEffect";

const CT3 = () => {
  const { color } = useContext(ColorContext); // Get color from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('cb3'); // 'g' for g1-g4 and 's' for s1-s4
  const [clickedLink, setClickedLink] = useState(null); // Track clicked link index
  const [nextLinkIndex, setNextLinkIndex] = useState(null); // Track next link index for automatic change
  const [timeoutId, setTimeoutId] = useState(null); // Track timeout ID for clearing
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const linkTexts = [
    { text: 'Buildings', set: 'cb3' },
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
    <div className="text-table-wglitch-wj6 cleaning-bg">
      <UCMenu />
      <div className="center-container">
        <div>
          <table className="rajdhani-regular">
            <div
              className="grid-lines-overlay-ct3"
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
          <h3 className="sub-heading orbitron" style={{ color: color.color }}>Heavy-duty cleaning for carpets and pipes</h3>
          <h1 className="main-heading rajdhani-medium">DEEP CLEANING SOLUTIONS</h1>
        </div>

        <div className="divider"></div>
        <Klenco />
        <div className="divider"></div>

        <div className="product-content">
        <div className="section section-ct1">
        <div className="column image-column">
        <p className='barcode ct3-brcd-s1'>Mini Rooter Pro</p>
          <img src={require("../../assets/images/cleaning/ct3/ct31.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1'>Designed to tackle tough clogs with its powerful cleansing capability and high-torque motor. Its compact size and durable construction make it perfect for both residential and commercial use.</p>
          <ul>
            <li className='bullet-list ct3-bls-s1'>Powerful Cleansing: Removes tough clogs and blockages efficiently</li>
            <li className='bullet-list ct3-bls-s1'>Compact Size: Easily fits into tight or confined spaces</li>
            <li className='bullet-list ct3-bls-s1'>Portable Design: Lightweight and easy to transport between jobs</li>
            <li className='bullet-list ct3-bls-s1'>High Torque Motor: Provides robust performance for challenging tasks</li>
          </ul>
        </div>
      </div>


      <div className="divider"></div>
      <div className="section section-ct2">
      <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-2 ct3-p-s2'>Offers high-pressure performance and advanced technology for efficient and precise cleaning. Constructed with durable materials and featuring versatile attachments, it is both user-friendly and easy to maneuver</p>
          <ul>
            <li className='bullet-list ct3-bls-s2'>Advanced Jet Technology: Ensures efficient removal of tough residues</li>
            <li className='bullet-list ct3-bls-s2'>Durable Materials: Built for long-lasting, reliable operation</li>
            <li className='bullet-list ct3-bls-s2'>Versatile Attachments: Adapts to various cleaning and maintenance needs</li>
            <li className='bullet-list ct3-bls-s2'>Quick Setup: Allows for rapid deployment and use</li>
          </ul>
        </div>
        <div className="column image-column spir-barcode">
            <p className='barcode ct3-brcd-s2'>Hydrajet Interpid Series </p>
          <img src={require("../../assets/images/cleaning/ct3/ct32.png")} alt="Placeholder" className='p-image1'/>
        </div>
      </div>

      
      <div className="divider"></div>

      <div className="product-content">
      <div className="section section-ct1">
        <div className="column image-column">
        <p className='barcode ct3-brcd-s3'>Monsoon ST3</p>
          <img src={require("../../assets/images/cleaning/ct3/ct33.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1'>Deliver high efficiency and versatile operation, making them ideal for a range of cleaning tasks. With their robust construction and advanced filtration, these machines ensure durability and cleaner air. </p>
          <ul>
            <li className='bullet-list ct3-bls-s3'>High Efficiency: Provides effective cleaning with superior performance</li>
            <li className='bullet-list ct3-bls-s3'>Versatile Operation: Adapts to various cleaning and maintenance needs</li>
            <li className='bullet-list ct3-bls-s3'>Large Capacity: Accommodates more waste, reducing downtime</li>
            <li className='bullet-list ct3-bls-s3'>Robust Construction: Designed for durability and long-term use</li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>






    </div>
    <div className="divider"></div>
      <div className="section section-ct4">
      <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-2 ct3-p-s4'>Combines powerful suction with advanced filtration for efficient and thorough cleaning. Its compact design and durable build ensure it performs well in tight spaces and withstands frequent use.</p>
          <ul>
            <li className='bullet-list ct3-bls-s4'>Powerful Suction: Delivers robust cleaning with strong suction</li>
            <li className='bullet-list ct3-bls-s4'>Advanced Filtration: Captures fine particles for cleaner air</li>
            <li className='bullet-list ct3-bls-s4'>Durable Build: Engineered to withstand heavy, regular use</li>
            <li className='bullet-list ct3-bls-s4'>Compact Design: Maneuvers easily in tight and narrow spaces</li>
          </ul>
        </div>
        <div className="column image-column spir-barcode">
            <p className='barcode ct3-brcd-s4'>Typhoon SE35-D</p>
          <img src={require("../../assets/images/cleaning/ct3/ct34.png")} alt="Placeholder" className='p-image1'/>
        </div>
      </div>




      <div className="divider"></div>
      <CT3S/>

      
      </div>
      </div>
      <Contact />
      <Footer />
      <BarcodeEffect />
    </div>

  );
};

export default CT3;
