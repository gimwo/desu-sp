import { useContext, useEffect, useState } from "react";
import ColorContext from "../../context/ColorContext";
import PageContext from "../../context/PageContext";
import { Link } from 'react-router-dom';
import WaterJetPage from './WaterJetPage';  // Import your page components here
import PressurePage from './PressurePage';
import CleaningPage from './CleaningPage';
import EnvironmentalPage from './EnvironmentalPage';

export default function UseCases() {
  const { color, setColor } = useContext(ColorContext);
  const { page, setPage, activeTab, setActiveTab } = useContext(PageContext);

  const handleTabClick = (tabName, color, bgColor) => {
    setColor({ color, bgColor });
    localStorage.setItem('kColor', color);
    localStorage.setItem('kBgColor', bgColor);
    localStorage.setItem('page', tabName);
    setActiveTab(localStorage.getItem('page') ?? tabName);
  };

  useEffect(() => {
    setPage('use-cases');

    // Ensure activeTab is set to default "Waterjet Technology" if not already set
    // if (!activeTab) {
    //   handleTabClick("Waterjet Technology", "#32CBBB", "#0C191D");
    // }
  }, [setPage, activeTab]);

  // Function to render the correct content based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case "Waterjet Technology":
        return <WaterJetPage />;
      case "Pressure Technology":
        return <PressurePage />;
      case "Cleaning Technology":
        return <CleaningPage />;
      case "Environment Technology":
        return <EnvironmentalPage />;
      default:
        return null;
    }
  };

  return (
    <div className="hero use-case-bg">

      <div className="use-case-container">
        <h2 className="use-case-heading rajdhani-medium">
          A NEW ERA OF HYDRO
        </h2>
        <p className="use-case-text rajdhani-regular">
        Leveraging advanced waterjet, pressure, cleaning, and environmental technologies, we provide innovative solutions that achieve unparalleled results in cleaning and sanitation.
        </p>

        <ol className="filter-tabs">
          <li
            className="tab-item rajdhani-semibold"
            style={{
              color: activeTab === "Waterjet Technology" ? "#32CBBB" : "white",
              transition: "all 0.5s linear",
            }}
            onClick={() => handleTabClick("Waterjet Technology", "#32CBBB", "#0C191D")}
          >
            Waterjet Technology
          </li>
          <li
            className="tab-item rajdhani-semibold"
            style={{
              color: activeTab === "Pressure Technology" ? "#FF5050" : "white",
              transition: "all 0.5s linear",
            }}
            onClick={() => handleTabClick("Pressure Technology", "#FF5050", "#1D0C0C")}
          >
            Pressure Technology
          </li>
          <li
            className="tab-item rajdhani-semibold"
            style={{
              color: activeTab === "Cleaning Technology" ? "#BC50FF" : "white",
              transition: "all 0.5s linear",
            }}
            onClick={() => handleTabClick("Cleaning Technology", "#BC50FF", "#0C1D14")}
          >
            Cleaning Technology
          </li>
          <li
            className="tab-item rajdhani-semibold"
            style={{
              color: activeTab === "Environment Technology" ? "#53FF50" : "white",
              transition: "all 0.5s linear",
            }}
            onClick={() => handleTabClick("Environment Technology", "#53FF50", "#1A0C1D")}
          >
            Environment Technology
          </li>
        </ol>

        {/* Render the content based on activeTab */}
        {renderContent()}

      </div>
    </div>
  );
}
