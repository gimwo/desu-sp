import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ColorContext from "../../../context/ColorContext";

function Contact({ object, setContainer, container }) {
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
  const { color } = useContext(ColorContext);
  const { elRef, cursorRef } = useConsoleText(["CONTACT"], ["#fff"], "text");

  function handleClick() {
    object.current.emitEventReverse("mouseDown");
    // object.current.emitEvent("mouseUp");
    setContainer(() => !container);
  }

  useGSAP(() => {
    gsap.fromTo(
      "#container",
      { translateY: 300, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  });
  // useEffect(() => {
  //   const bridgeObj = spline.findObjectByName("Water Jet");
  //   object.current = bridgeObj;
  // }, []);

  return (
    <div
      id="container"
      className="absolute bottom-0 z-10 right-5 contact-slide"
    >
      <div
        className="console-container-fix"
        style={{
          fontFamily: "rajdhani",
          fontWeight: "500",
          color: "#fff",
        }}
      >
        <span id="text" ref={elRef}></span>
        <div className="console-underscore" id="console" ref={cursorRef}>
          &#95;
        </div>
        <p className="rajdhani-medium-contact contact-detail-fix">
          Whether new partners or interested parties - we look forward to
          hearing from you and <br /> exchanging ideas together.
        </p>
        <div className="flex flex-row w-100 justify-evenly ">
          <div className="contact-left-column w-1/2">
            <p className="centered-text-fix rajdhani-medium-contact pl-12 pr-10">
              ENTER your contact details here and We will get back to you as
              soon as possible.
            </p>
          </div>
          <form className="contact-form w-1/2">
            <div className="form-group-fix">
              <input
                className="rajdhani-medium-contact form-text-fix"
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
              />
            </div>
            <div className="form-group-fix">
              <input
                className="rajdhani-medium-contact form-text-fix"
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
              />
            </div>
            <div className="form-group-fix">
              <input
                className="rajdhani-medium-contact form-text-fix"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number*"
              />
            </div>
            <div className="form-group-fix">
              <input
                className="rajdhani-medium-contact form-text-fix"
                type="text"
                id="concern"
                name="concern"
                placeholder="Concern*"
              />
            </div>
            <div className="form-group-fix additional-text-row rajdhani-medium-contact mt-1">
              <p className="additional-text">
                *By submitting, the data provided will be used to perform your
                request according to the Privacy Policy.
              </p>
              <button
                className="submit-button-fix rajdhani-medium-contact"
                style={{
                  backgroundColor: "#fff",
                  fontSize: "20px",
                }}
                type="submit"
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = `0px 0px 41px 0px "#fff"`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col h-100 w-[50vw]"></div>
    </div>
  );
}

export default Contact;
