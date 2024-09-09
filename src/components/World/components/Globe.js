import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";

function Globe({ object, setContainer, container, handleTabClick }) {
  const { elRef, cursorRef } = useConsoleText(
    ["ENVIRONMENTAL"],
    ["#fff"],
    "text"
  );
  function useConsoleText(words, colors, id) {
    const elRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
      const target = elRef.current;
      const cursor = cursorRef.current;
      let letterCount = 1;
      let x = 1;
      let waiting = false;
      const colorsRef = [...colors];
      const wordsRef = [...words];

      const updateText = () => {
        if (letterCount === 0 && !waiting) {
          waiting = true;
          target.innerHTML = wordsRef[0].substring(0, letterCount);
          setTimeout(() => {
            const usedColor = colorsRef.shift();
            colorsRef.push(usedColor);
            const usedWord = wordsRef.shift();
            wordsRef.push(usedWord);
            x = 1;
            target.setAttribute("style", "color:" + colorsRef[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === wordsRef[0].length + 1 && !waiting) {
          waiting = true;
          setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (!waiting) {
          target.innerHTML = wordsRef[0].substring(0, letterCount);
          letterCount += x;
        }
      };

      const textInterval = setInterval(() => {
        if (letterCount > wordsRef[0].length) {
          clearInterval(textInterval);
          return;
        }
        updateText();
      }, 120);

      const blinkCursor = () => {
        cursor.classList.toggle("hidden");
      };

      const cursorInterval = setInterval(blinkCursor, 400);

      return () => {
        clearInterval(textInterval);
        clearInterval(cursorInterval);
      };
    }, [colors, words]);

    return { elRef, cursorRef };
  }
  function handleClick() {
    object.current.emitEventReverse("mouseDown");
    // object.current.emitEvent("mouseUp");
    setContainer(() => !container);
  }

  useGSAP(() => {
    gsap.fromTo(
      "#container",
      { translateX: 300, opacity: 0 },
      { translateX: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  });
  // useEffect(() => {
  //   const bridgeObj = spline.findObjectByName("Water Jet");
  //   object.current = bridgeObj;
  // }, []);

  return (
    <div
      id="container"
      className={
        "absolute bg-gradient-to-r to-gray-900 to from-transparent h-[100vh] w-[70vw] top-0 z-10 right-0"
      }
    >
      <div className="flex flex-col pt-72 px-32 h-full w-[70vw] justify-center items-start">
        <h2
          className="text-green-600 border-b go-back-btn-green mb-4"
          onClick={handleClick}
        >
          Go back
        </h2>
        <div>
          <span
            id="text"
            style={{
              fontFamily: "rajdhani",
              fontWeight: "500",
              fontSize: "80px",
              color: "#fff",
            }}
            ref={elRef}
          ></span>
          <div
            className="console-underscore"
            id="console"
            style={{ color: "#fff", fontSize: "80px" }}
            ref={cursorRef}
          >
            &#95;
          </div>
        </div>
        <p className="text-white text-22px pt-3">
          Environment technology focuses on sustainable solutions for various
          environmental challenges.
          <p style={{ fontSize: "14px", paddingTop: "1rem" }}>
            We specialize in handling floating roof tanks for gas storage, noise
            pollution control in loud machine areas, and water treatment systems
            like Reverse Osmosis, Wastewater treatment, and Desalination. These
            technologies help protect the environment by managing gases,
            reducing noise, and ensuring access to clean water.
          </p>
        </p>
        <div
          className="contact-us-btn learn-more-btn"
          onClick={() => {
            handleTabClick("Environment Technology", "#53FF50", "#1A0C1D");
          }}
        >
          <Link
            className="contact-link"
            style={{
              color: "black",
              backgroundColor: "#53FF50",
              textDecoration: "none",
              display: "inline-block",
              padding: "3px 30px",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = `0px 0px 41px 0px #53FF50`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Globe;
