import React, { useRef, useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import ColorContext from '../../context/ColorContext';
import plane from '../../assets/images/univ/paperplane.png';

export default function Contact() {
  const { color } = useContext(ColorContext);
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const contactContainerRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted) {
          startTextAnimation();
          setAnimationStarted(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (contactContainerRef.current) {
      observer.observe(contactContainerRef.current);
    }

    return () => {
      if (contactContainerRef.current) {
        observer.unobserve(contactContainerRef.current);
      }
    };
  }, [animationStarted]);

  const startTextAnimation = async () => {
    const text = 'Interested?';
    const target = textRef.current;
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      newText += text[i];
      if (target) {
        target.innerHTML = newText;
      }
      await new Promise(resolve => setTimeout(resolve, 120));
    }
  };

  useEffect(() => {
    const blinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.toggle('hidden');
      }
    };

    const cursorInterval = setInterval(blinkCursor, 400);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="contact-container" id="contact" ref={contactContainerRef}>
      <div className="divider"></div>
      <div className="icon-container">
        <a href="#top">
          <FaArrowUp className="scroll-to-top-icon" style={{ color: color.color }} />
        </a>


        <svg className="filter">
        <filter id="alphaRed">
          <feColorMatrix mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="joint" />
        </filter>
        <filter id="alphaGreen">
          <feColorMatrix mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="joint" />
        </filter>
        <filter id="alphaBlue">
          <feColorMatrix mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="joint" />
        </filter>
        <filter id="alpha">
          <feColorMatrix type="saturate" values="0"/>
        </filter>
      </svg>



      </div>






        <div className="imgWrap">
          <img className="red" src={plane} alt="Example" />
          <img className="green" src={plane} alt="Example" />
          <img className="blue" src={plane} alt="Example" />
        </div>







      <h2 className="contact-heading" style={{ color: color.color }}>
        <span className="interested-text" ref={textRef}></span>
        <span ref={cursorRef} className="console-underscore">&#95;</span>
      </h2>
      <p className="contact-text">
        Find out more about our projects. We will be happy to provide you with
        personal <br /> information if you have any questions.
      </p>
      <div className="contact-us-btn">
        <Link
          to="/contact"
          className="contact-link"
          style={{
            color: 'black',
            backgroundColor: color.color,
            textDecoration: 'none',
            display: 'inline-block',
            padding: '3px 30px',
            transition: 'box-shadow 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = `0px 0px 41px 0px ${color.color}`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
