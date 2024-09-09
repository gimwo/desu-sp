import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Tank({ object, setContainer, container, handleTabClick }) {
  const { elRef, cursorRef } = useConsoleText(["CLEANING"], ["#fff"], "text");
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
          className="text-violet-300 border-b-inherit go-back-btn-purple mb-4"
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
          Cleaning technology provides advanced solutions for maintaining
          factories, industrial facilities, and commercial spaces.
          <p style={{ fontSize: "14px", paddingTop: "1rem" }}>
            Utilizing high-quality vacuums, fume extractors, carpet extractors,
            floor machines, high-pressure pipe cleaners, and autonomous cleaning
            robots, we ensure thorough and efficient cleaning. Each tool is
            paired with the appropriate cleaning agents to meet the specific
            needs of different environments.
          </p>
        </p>
        <div
          className="contact-us-btn learn-more-btn"
          onClick={() => {
            handleTabClick("Cleaning Technology", "#BC50FF", "#0C1D14");
          }}
        >
          <Link
            className="contact-link"
            style={{
              color: "black",
              backgroundColor: "#BC50FF",
              textDecoration: "none",
              display: "inline-block",
              padding: "3px 30px",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = `0px 0px 41px 0px #BC50FF`;
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

export default Tank;
