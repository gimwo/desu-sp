import React, { useState } from "react";
import Contact from "../components/contact/Contact";
import Slider from "../components/slider/Slider";
import Navbar from "../components/hero/components/Navbar";
import "../styles/styles.css"; // Ensure your CSS file is correctly imported
import ProductContent from "../components/ProductContent";
import Static from "../components/slider/StaticNSC";
import Footer from "../components/footer/Footer";
import MenuIcon from "../components/MenuIcon";
import defaultImage from "../assets/images/univ/x5.webp";
import roadsImage from "../assets/images/univ/x1.webp";
import runwaysImage from "../assets/images/univ/x4.webp";
import portsImage from "../assets/images/univ/x2.webp";
import quaysImage from "../assets/images/univ/x3.webp";
import parkingdecksImage from "../assets/images/univ/x4.webp";

function Product() {
  const [backgroundImage, setBackgroundImage] = useState(defaultImage);
  const [animationClass, setAnimationClass] = useState("");

  const handleImageChange = (linkText) => {
    let newImage = defaultImage; // Default image
    if (linkText === "Roads") {
      newImage = roadsImage;
    } else if (linkText === "Runways") {
      newImage = runwaysImage;
    } else if (linkText === "Ports") {
      newImage = portsImage;
    } else if (linkText === "Quays") {
      newImage = quaysImage;
    } else if (linkText === "Parking Decks") {
      newImage = parkingdecksImage;
    }
    // Add conditions for other link texts if needed

    setAnimationClass("pixel-fade-out"); // Trigger the fade-out animation
    setTimeout(() => {
      setBackgroundImage(newImage); // Change the image after the animation
      setAnimationClass(""); // Remove the animation class
    }, 500); // Duration of the animation
  };

  return (
    <div className="product-bg">
      <Navbar />

      {/* Section 1 */}
      <div className={`section-1 ${animationClass}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="text-table">
          <table className="rajdhani-regular">
            <tbody>
              <tr>
                <td className="featured-text">Featured Use Cases</td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Roads")}>Roads</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Bridges")}>Bridges</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Runways")}>Runways</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Ports")}>Ports</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Quays")}>Quays</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Parking Decks")}>Parking Decks</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Dams")}>Dams</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Pillars")}>Pillars</span></td>
              </tr>
              <tr>
                <td><span className="featured-link" onClick={() => handleImageChange("Tunnels")}>Tunnels</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="sub-heading orbitron">CONCRETE REMOVAL</h3>
        <h1 className="main-heading rajdhani-medium">HYDRO DEMOLITION</h1>
      </div>

      <div className="divider"></div>
      <Static />
      {/* <Slider /> */}
      <div className="divider"></div>
      <ProductContent />
      <Contact />
      <Footer />
    </div>
  );
}

export default Product;
