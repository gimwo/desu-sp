import React, { useEffect, useRef, useState, useContext } from "react";
import MenuIcon from "../components/MenuIcon";
import { useNavigate } from "react-router-dom";
import ColorContext from "../context/ColorContext";

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

export default function ContactPage() {
  const { color } = useContext(ColorContext);
  const { elRef, cursorRef } = useConsoleText(["CONTACT"], ["#fff"], "text");

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleProductClick = () => {
    navigate("/product");
  };

  return (
    <div className="contact-bg">
      <MenuIcon />
      <div className="vertical-line left-line"></div>
      <div className="vertical-line right-line"></div>
      <div className="contact-container">
        <div
          className="console-container"
          style={{
            fontFamily: "rajdhani",
            fontWeight: "500",
            color: color.color,
          }}
        >
          <span id="text" ref={elRef}></span>
          <div className="console-underscore" id="console" ref={cursorRef}>
            &#95;
          </div>
        </div>
        <p className="rajdhani-medium-contact contact-detail">
          Whether new partners or interested parties - we look forward to
          hearing from you and <br /> exchanging ideas together.
        </p>

        {/* Two Containers in a Row */}
        <div className="contact-form-row">
          {/* Left Column - Centered Text */}
          <div className="contact-left-column">
            <p className="centered-text rajdhani-medium-contact">
              ENTER your contact details here and We will get back to you as
              soon as possible.
            </p>
          </div>

          {/* Right Column - Form */}
          <form className="contact-form">
            <div className="form-group">
              <input
                className="rajdhani-medium-contact form-text"
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
              />
            </div>
            <div className="form-group">
              <input
                className="rajdhani-medium-contact form-text"
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
              />
            </div>
            <div className="form-group">
              <input
                className="rajdhani-medium-contact form-text"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number*"
              />
            </div>
            <div className="form-group">
              <input
                className="rajdhani-medium-contact form-text"
                type="text"
                id="concern"
                name="concern"
                placeholder="Concern*"
              />
            </div>
            <div className="form-group additional-text-row rajdhani-medium-contact">
              <p className="additional-text">
                *By submitting, the data provided will be used to fulfill your request according to the Privacy Policy.
              </p>
              <button
                className="submit-button rajdhani-medium-contact"
                style={{ backgroundColor: color.color }}
                type="submit"
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = `0px 0px 41px 0px ${color.color}`;
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
    </div>
  );
}
