import React, { useState, useEffect, useContext } from 'react';
import "../../styles/clt2.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
import UCMenu from "../UCMenu";
import Klenco from "../slider/Klenco";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import CT2S from "../dotparts/CT2S";
import BarcodeEffect from "../brcd/BarcodeEffect";


const CT2 = () => {
  const { color, setColor } = useContext(ColorContext); // Get color and setColor from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('chp2');
  const [clickedLink, setClickedLink] = useState(null);
  const [nextLinkIndex, setNextLinkIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const linkTexts = [
    { text: 'Hospital', set: 'chpt2' },
    { text: 'Supermarket', set: 'csm2' },
    { text: 'Hotel', set: 'cht2' },
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
    <div className="text-table-wglitch-wj6 cleaning-bg">
      <UCMenu />
      <div className="center-container">
        <div>
          <table className="rajdhani-regular">
            <div
              className="grid-lines-overlay-ct"
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
          <div className={`glitch7 ${glitch ? `glitch-active-${imageSet}` : `glitch-static-${imageSet}`}`}></div>
          <h3 className="sub-heading orbitron" style={{ color: color?.color }}>Specialized tools for commercial floors</h3>
          <h1 className="main-heading rajdhani-medium">FLOOR CARE SYSTEMS</h1>
        </div>

        <div className="divider"></div>
        <Klenco />
        <div className="divider"></div>

        <div className="product-content">
        <div className="section section-ct1">
        <div className="column image-column">
        <p className='barcode ct2-brcd-s1'>Tennant b10</p>
          <img src={require("../../assets/images/cleaning/ct2/ct1.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1'>offers efficient cleaning with its powerful scrubbing and compact design, making it ideal for tight spaces. </p>
          <ul>
            <li className='bullet-list ct2-bls-s1'>Compact Design: Maneuvers easily in tight spaces</li>
            <li className='bullet-list ct2-bls-s1'>Quiet Operation: Minimizes noise during cleaning tasks</li>
            <li className='bullet-list ct2-bls-s1'>Quick Drying: Leaves floors clean and dry rapidly</li>
            <li className='bullet-list ct2-bls-s1'>Efficient Battery: Provides extended runtime for uninterrupted operation</li>
          </ul>
        </div>
      </div>


      <div className="divider"></div>
      <div className="section section-ct2">
      <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-2 ct2-p-s2'>Combines high-performance cleaning with advanced scrubbing technology, making it ideal for large commercial spaces. </p>
          <ul>
            <li className='bullet-list ct2-bls-s2'>Performance: Delivers exceptional cleaning power for large areas</li>
            <li className='bullet-list ct2-bls-s2'>Scrubbing Technology: Thorough cleaning with superior brush action</li>
            <li className='bullet-list ct2-bls-s2'>Capacity: Reduces downtime with extended cleaning intervals</li>
            <li className='bullet-list ct2-bls-s2'>Water Recovery: Maximizes water usage with recovery system</li>
          </ul>
        </div>
        <div className="column image-column spir-barcode">
            <p className='barcode ct2-brcd-s2'>Tennant T260</p>
          <img src={require("../../assets/images/cleaning/ct2/ct2.png")} alt="Placeholder" className='p-image1'/>
        </div>
      </div>

      
      <div className="divider"></div>

      <div className="product-content">
      <div className="section section-ct1">
        <div className="column image-column">
        <p className='barcode ct2-brcd-s3'>Tempest MS900</p>
          <img src={require("../../assets/images/cleaning/ct2/ct3.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1 left-spacing-1'>Offers powerful suction and advanced filtration, making it ideal for deep cleaning and allergen control. Its ergonomic design and large capacity ensure comfort and efficiency, durable construction and versatile attachments.</p>
          <ul>
            <li className='bullet-list ct2-bls-s3'>Powerful Suction: Removes dirt and debris effectively</li>
            <li className='bullet-list ct2-bls-s3'>Advanced Filtration: Captures fine dust and allergens efficiently</li>
            <li className='bullet-list ct2-bls-s3'>Ergonomic Design: Provides comfort and ease during use</li>
            <li className='bullet-list ct2-bls-s3'>Large Capacity: Handles more waste for extended cleaning</li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>


    <CT2S />
      </div>
      </div>
      </div>
      <Contact />
      <Footer />
      <BarcodeEffect />
    </div>
  );
};

export default CT2;
