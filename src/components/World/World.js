import React, { useEffect, useState } from "react";
import "../../styles/styles.css";
import Spline from "@splinetool/react-spline";
import { useContext, useRef } from "react";
import Container from "./components/Container";
import Tank from "./components/Tank";
import Globe from "./components/Globe";
import Pressure from "./components/Pressure";
import Contact from "./components/Contact";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PageContext from "../../context/PageContext";
import ColorContext from "../../context/ColorContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import lineGraph from "../../assets/images/line.gif";
import MouseTracker from "./components/MouseTracker";
import Tilt from "react-parallax-tilt";
import barGraph from "../../assets/images/bar.gif";
import circle1 from "../../assets/images/circle1.png";
import circle2 from "../../assets/images/circle2.png";
// import Loading from "../../components/loading/Loading"; // Import the Loading component
import dezuImage from "../../assets/images/univ/dezu.png";
// import Overlay from "./components/Overlay";

const Loading = ({}) => {
  const [moveImage, setMoveImage] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [blinkElements, setBlinkElements] = useState(false);
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Start moving the image and showing loading after 0.6 seconds
    const timer1 = setTimeout(() => {
      setMoveImage(true);
      setShowLoading(true);
    }, 600);

    // Start blinking after loading is complete
    const timer2 = setTimeout(() => {
      setBlinkElements(true);
    }, 2500); // Adjust this timing to start blinking after loading

    // Notify parent component and stop blinking after 2 seconds
    const timer3 = setTimeout(() => {
      setBlinkElements(false);
      setShowLoading(false);
      setLoadingComplete(() => true);
    }, 3000); // 2 seconds of blinking + 1.6 seconds before blinking

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [setLoadingComplete]);

  const coordsRef = useRef({ x: 0, y: 0 });
  let x = 0;
  let y = 0;
  const navigate = useNavigate();
  const logo = useRef();
  const bridge = useRef();
  const tank = useRef();
  const ship = useRef();
  const globe = useRef();
  const plane = useRef();
  const [logoSelect, setLogoSelect] = useState(false);
  const [container, setContainer] = useState(false);
  const [tankCon, setTankCon] = useState(false);
  const [aboutCon, setAboutCon] = useState(false);
  const [pressureCon, setPressureCon] = useState(false);
  const [contactCon, setContactCon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const [dummyState, setDummyState] = useState(false);
  // const [hovered, setHovered] = useState(true);

  const { color, setColor } = useContext(ColorContext);
  const { page, setPage, activeTab, setActiveTab } = useContext(PageContext);
  const tl = gsap.timeline({ paused: true, reversed: true });
  const tl2 = gsap.timeline({ paused: true, reversed: true });

  const handleTabClick = (tabName, color, bgColor) => {
    setColor({ color, bgColor });
    localStorage.setItem("kColor", color);
    localStorage.setItem("kBgColor", bgColor);
    localStorage.setItem("page", tabName);
    setActiveTab(tabName);
    navigate("/use-cases");
  };

  const { params } = useParams();

  // const handleMouseOver = (e) => {
  //   const object = e.target;
  //   console.log(`ETARGET: ${object}`);
  //   object.material.color.set(0xff0000); // Change color to red when hovered
  // };
  console.log(`PARAMS: ${params}`);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function updateCoordinates(e) {
    setCoords({ x: e.pageX, y: e.pageY });
  }

  function handleTick(e) {
    console.log(`X: ${x}`);
    console.log(`Y: ${y}`);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadingComplete(true);
    }, 2500);
  }, []);

  // useEffect(() => {
  //   if (hovered) {
  //     document.body.style.cursor = "pointer";
  //   }
  // }, [hovered]);
  function handleStart() {
    console.log(logo);
    logo.current.emitEvent("mouseDown");
    tl2.to(document.querySelector(".dots-container"), {
      opacity: 1,
    });
    tl2.play();

    tl.to(document.querySelector("#start"), {
      opacity: "0",
      duration: 0.1,
    });
    tl.to(document.querySelector("#start"), {
      opacity: "1",
      duration: 0.05,
    });
    tl.to(document.querySelector("#start"), {
      opacity: "0",
      duration: 0.05,
    });
    tl.to(document.querySelector("#start"), {
      opacity: "1",
      duration: 0.05,
    });
    tl.to(document.querySelector("#start"), {
      opacity: "0",
      duration: 0.05,
    });
    tl.play();
  }

  function onMouseDown(e) {
    console.log(e.target.name);
    console.log(e.target.name.length);

    if (e.target.name === "Waterjet") {
      setContainer((container) => !container);
      console.log("CLICKED");
    }
    if (e.target.name === "Cleaning") {
      setTankCon((tankCon) => !tankCon);
      console.log("CLICKED");
    }
    if (e.target.name === "Environment") {
      setAboutCon((aboutCon) => !aboutCon);
      console.log("CLICKED");
    }
    if (e.target.name.trim() === "Pressure") {
      setPressureCon((pressureCon) => !pressureCon);
      console.log("CLICKED");
    }
    if (e.target.name === "CTA") {
      setContactCon((contactCon) => !contactCon);
    }
  }

  function selectedObject(e) {
    console.log(e);
    console.log(e.target.id);
    switch (e.target.id) {
      case "water-jet":
        if (container === true) {
          console.log("CLICKED");
          return;
        }
        bridge.current.emitEvent("mouseDown");
        // bridge.current.emitEvent("mouseUp");
        setContainer(() => !container);
        setTankCon(() => false);
        setAboutCon(() => false);
        setPressureCon(() => false);
        setContactCon(() => false);
        break;
      case "cleaning":
        if (tankCon === true) {
          return;
        }
        tank.current.emitEvent("mouseDown");
        setTankCon(() => !tankCon);
        setContainer(() => false);
        setAboutCon(() => false);
        setPressureCon(() => false);
        setContactCon(() => false);
        break;
      case "about":
        if (aboutCon === true) {
          return;
        }

        globe.current.emitEvent("mouseDown");
        setAboutCon(() => !aboutCon);
        setContainer(() => false);
        setTankCon(() => false);
        setPressureCon(() => false);
        setContactCon(() => false);
        break;
      case "pressure":
        if (pressureCon === true) {
          return;
        }
        ship.current.emitEvent("mouseDown");
        setPressureCon(() => !pressureCon);
        setContainer(() => false);
        setTankCon(() => false);
        setAboutCon(() => false);
        setContactCon(() => false);

        break;
      case "contact":
        if (contactCon === true) {
          return;
        }
        plane.current.emitEvent("mouseDown");
        setContactCon(() => !contactCon);
        setContainer(() => false);
        setTankCon(() => false);
        setPressureCon(() => false);
        setAboutCon(() => false);

        break;
      default:
        return;
    }
  }

  function onLoad(spline) {
    setIsLoading(true);
    console.log(`ISLOADING: ${isLoading}`);
    const logoObj = spline.findObjectByName("Logo");
    const bridgeObj = spline.findObjectByName("Waterjet");
    const tankObj = spline.findObjectByName("Cleaning");
    const globeObj = spline.findObjectByName("Environment");
    const shipObj = spline.findObjectByName("Pressure");
    const planeObj = spline.findObjectByName("CTA");

    logo.current = logoObj;
    bridge.current = bridgeObj;
    tank.current = tankObj;
    ship.current = shipObj;
    globe.current = globeObj;
    plane.current = planeObj;
    // console.log(planeObj);

    // Add hover event listeners

    console.log(`ISLOADING: ${isLoading}`);
    setIsLoading(false);
  }

  // function onCoordinatesUpdate(e) {
  //   let x = e.pageX.toFixed(3);
  //   let y = e.pageY.toFixed(3);
  //   console.log(`${x}, ${y}`);
  //   setCoords({ x: x, y: y });
  // }

  useGSAP(() => {
    gsap.fromTo(
      "#start",
      { translateY: 100, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  });

  gsap.to(
    ".circles2",
    {
      duration: 5,
      rotation: "+=360cw",
      repeat: -1,
      ease: "none",
    },
    [isLoading]
  );

  gsap.to(".circles", {
    duration: 2,
    rotation: "+=360cw",
    repeat: -1,
    ease: "none",
  });

  return isLoadingComplete ? (
    <div className="relative view">
      {isLoading && (
        <div className="loading-spinner">
          {/* Add any loading spinner or text here */}
          <p style={{ color: "white" }}>Loading...</p>
        </div>
      )}
      <span>
        <MouseTracker />
        <img
          alt="random bar graph"
          className="absolute bar-graph"
          style={{
            width: "13.5rem",
            height: "3rem",
            opacity: "0.3",
            filter: "grayscale(100%)",
          }}
          src={barGraph}
        />
        <img
          alt="random bar graph"
          className="absolute circles"
          style={{
            height: "2.5rem",
            width: "2.5rem",
            opacity: "0.15",
            filter: "grayscale(100%)",
          }}
          src={circle1}
        />
        <img
          alt="random bar graph"
          className="absolute circles2"
          style={{
            height: "5rem",
            width: "5rem",
            opacity: "0.15",
            filter: "grayscale(100%)",
          }}
          src={circle2}
        />

        <span className="rajdhani-semibold absolute dezu-header">
          DEZU CORPORATION
        </span>
        <span>
          <div className="overlay-for-world absolute">
            <svg
              className="absolute z-50 top-10 line-effect"
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              width="1730"
              height="37.858"
              viewBox="0 0 1730 37.858"
            >
              <g id="Layer_3">
                <polyline
                  points="1730 36.858 1494 36.858 1461.952 4.811 273.857 1.001 238 36.858 0 36.858"
                  fill="none"
                  stroke="#ffffff33"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </svg>
            <svg
              className="absolute z-100 bottom-10 line-effect rotate"
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              width="1730"
              height="37.858"
              viewBox="0 0 1730 37.858"
            >
              <g id="Layer_3">
                <polyline
                  points="1730 36.858 1494 36.858 1461.952 4.811 273.857 1.001 238 36.858 0 36.858"
                  fill="none"
                  stroke="#ffffff33"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
        </span>
      </span>
      {/* 
      <MouseTracker coords={coords} updateCoordinates={updateCoordinates} /> */}

      <div
        id="start"
        className=" click-to-start-btn rajdhani-semibold"
        onClick={() => {
          if (logo.current == null) {
            return;
          }
          handleStart();
        }}
      >
        CLICK TO START
      </div>

      {container ? (
        <Container
          object={bridge}
          setContainer={setContainer}
          container={container}
          handleTabClick={handleTabClick}
        />
      ) : null}
      {tankCon ? (
        <Tank
          object={tank}
          setContainer={setTankCon}
          container={tankCon}
          handleTabClick={handleTabClick}
        />
      ) : null}
      {aboutCon ? (
        <Globe
          object={globe}
          setContainer={setAboutCon}
          container={aboutCon}
          handleTabClick={handleTabClick}
        />
      ) : null}
      {pressureCon ? (
        <Pressure
          object={ship}
          setContainer={setPressureCon}
          container={pressureCon}
          handleTabClick={handleTabClick}
        />
      ) : null}

      {contactCon ? (
        <Contact
          object={plane}
          setContainer={setContactCon}
          container={contactCon}
          handleTabClick={handleTabClick}
        />
      ) : null}

      {/* <div
        className="absolute top-10"
        style={{ backgroundColor: "red", width: "200px", height: "200px" }}
      ></div> */}

      <div className="dots-container">
        <div className="z-50 absolute flex flex-col gap-3 left-8 top-mid">
          <div
            id="water-jet"
            className={`h-2 w-2 bg-slate-500 rounded-xl  ${
              container ? "dot-navigate-active-blue dot-active" : "dot-navigate"
            }`}
            onClick={selectedObject}
          ></div>
          <div
            id="cleaning"
            className={`h-2 w-2 bg-slate-500 rounded-xl ${
              tankCon ? "dot-navigate-active-purple dot-active" : "dot-navigate"
            }`}
            onClick={selectedObject}
          ></div>
          <div
            id="about"
            className={`h-2 w-2 bg-slate-500 rounded-xl  ${
              aboutCon ? "dot-navigate-active-green dot-active" : "dot-navigate"
            }`}
            onClick={selectedObject}
          ></div>
          <div
            id="pressure"
            className={`h-2 w-2 bg-slate-500 rounded-xl ${
              pressureCon
                ? "dot-navigate-active-red dot-active"
                : "dot-navigate"
            }`}
            onClick={selectedObject}
          ></div>
          <div
            id="contact"
            className={`h-2 w-2 bg-slate-500 rounded-xl dot-navigate ${
              contactCon
                ? "dot-navigate-active-white dot-active"
                : "dot-navigate"
            }`}
            onClick={selectedObject}
          ></div>
        </div>
      </div>

      {!isLoading ? (
        <Spline
          onLoad={onLoad}
          className="view z-0"
          scene="https://prod.spline.design/cw4bh5C3-gsnWLTf/scene.splinecode"
          onMouseDown={onMouseDown}
          onClick={handleTick}
        />
      ) : null}
    </div>
  ) : (
    <div className="LD-container">
      <div className="LD-content">
        <img
          src={dezuImage}
          alt="Dezu Logo"
          className={`dezu-logo ${moveImage ? "move-left" : ""} ${
            blinkElements ? "blink" : ""
          }`}
        />
        {/* THIS PARAGRAPH WAS IRRELEVANT BUG */}
        <p style={{ opacity: "0" }}>
          console.log(dezu-irrelevant-text to work)
        </p>
        <div
          className={`loading-container ${showLoading ? "show" : ""} ${
            blinkElements ? "blink" : ""
          }`}
        >
          <div className="loading-text">
            LOADING STATUS: IN PROGRESS <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <div className="loading-bar">
            <div className="loading-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
