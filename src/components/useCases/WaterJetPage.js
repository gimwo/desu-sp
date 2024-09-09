import { useContext, useEffect } from "react";
import ColorContext from "../../context/ColorContext";
import PageContext from "../../context/PageContext";
import { Link } from 'react-router-dom';

export default function WaterJetPage() {

    const { color, setColor } = useContext(ColorContext);
    const { page, setPage, activeTab, setActiveTab } = useContext(PageContext);
  
    const handleTabClick = (tabName, color, bgColor) => {
      setActiveTab(tabName);
      setColor({ color, bgColor });
      localStorage.setItem('kColor', color);
      localStorage.setItem('kBgColor', bgColor);
    };
  
    useEffect(() => {
      setPage('use-cases');
  
      // Ensure activeTab is set to default "Waterjet Technology" if not already set
      if (!activeTab) {
        handleTabClick("Waterjet Technology", "#32CBBB", "#0C191D");
      }
    }, [setPage, activeTab]);

    return (
      <div className="card-container">
      <div className="line-1-wj"></div>
      <div className="line-2-wj"></div>
      <div className="line-3-wj"></div>



<Link to="/wj1" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div className="card-and-info">
    <div
      className="card"
      style={{
        backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf1.png')})`, // Replace with your image path
        backgroundSize: 'cover', // Ensures the image covers the entire card
        backgroundPosition: 'center', // Centers the image within the card
        transition: "all 0.5s linear",
        height: '334px', // Ensure card has height
        width: '299px', // Ensure card has width
        position: 'relative',
        cursor: 'pointer', // Ensure card looks clickable
      }}
    ></div>
    <div>
      <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
      HYDRO DEMOLITION{" "}
      </p>
      <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
      Selective Concrete Removal for Repairs{" "}
      </p>
    </div>
  </div>
</Link>


        
<Link to="/wj2" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf2.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              Concrete SURFACE PREPARATION{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Optimized Surface Preparation{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj3" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf3.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              Steel Surface Preparation{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Precision Steel Surface Preparation{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj4" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf4.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              Road Surface Preparation{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Removal of Markings and Deposits{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj5" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf5.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              Steel HIGH PRESSURE CLEANING{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Effective Dirt and Corrosion Removal{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj6" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf6.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              TUBE CLEANING{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Internal Tube Deposit Removal{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj7" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf7.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              PIPE CLEANING{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Internal Pipe Scaling Solutions{" "}
              </p>
            </div>
          </div>
        </Link>


        <Link to="/wj8" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf8.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              SEWER PIPE CLEANING{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Removes sewer pipe scaling{" "}
              </p>
            </div>
          </div>
        </Link>


        <Link to="/wj9" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf9.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              TANK AND VESSEL CLEANING{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Removes tank deposits{" "}
              </p>
            </div>
          </div>
        </Link>


        <Link to="/wj10" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf10.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              COLD CUTTING{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Cold cutting replaces hot work safely{" "}
              </p>
            </div>
          </div>
        </Link>


        <Link to="/wj11" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf11.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              PAINT BOOTH CLEANING{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Removes paint residues from booths{" "}
              </p>
            </div>
          </div>
        </Link>


        <Link to="/wj12" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/hydro/hcf/wf12.png')})`, // Replace with your image path
                backgroundSize: 'cover', // Ensures the image covers the entire card
                backgroundPosition: 'center', // Centers the image within the card
                transition: "all 0.5s linear",
                height: '334px', // Ensure card has height
                width: '299px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              General HIGH PRESSURE CLEANING{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
              Comprehensive cleaning{" "}
              </p>
            </div>
          </div>
        </Link>


      </div>
    );
}
