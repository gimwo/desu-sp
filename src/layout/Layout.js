import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { useContext, useEffect } from "react";
import PageContext from "../context/PageContext";

function Layout({ children }) {
  const { page } = useContext(PageContext);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  useGSAP(
    () => {
      if (page === "") {
        gsap.fromTo(
          ".navigation-btn-container",
          { css: { opacity: 0 } },
          {
            css: { opacity: 1 },
            duration: 0.3,
            scrollTrigger: {
              start: "top",
              toggleActions: "play none none reverse",
              trigger: ".section-heading",
              // toggleActions: "reverse",
            },
          }
        );

        gsap.fromTo(
          "#feature-text1",
          {
            opacity: 0,
            scrollTrigger: {
              trigger: "#feature1",
            },
            start: "bottom",
          },
          { opacity: 1 }
        );
      }
      return;
    },
    { dependencies: [page] }
  );

  return (
    <div className="layout">
      {children}
      <div className="svg-container-1">
        <svg
          className="line-element"
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          width="1"
          height="4630"
          viewBox="0 0 1 4630"
        >
          <g id="Layer_3" data-name="Layer 3">
            <g>
              <line
                x1=".5"
                y1="4630"
                x2=".5"
                y2="4625"
                fill="none"
                stroke="#ffffff26"
                stroke-miterlimit="10"
              />
              <line
                x1=".5"
                y1="4615.022"
                x2=".5"
                y2="9.989"
                fill="none"
                stroke="#ffffff26"
                stroke-dasharray="0 0 9.978 9.978"
                stroke-miterlimit="10"
              />
              <line
                x1=".5"
                y1="5"
                x2=".5"
                fill="none"
                stroke="#ffffff26"
                stroke-miterlimit="10"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="svg-container-2">
        <svg
          className="line-element"
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          width="1"
          height="4630"
          viewBox="0 0 1 4630"
        >
          <g id="Layer_3" data-name="Layer 3">
            <g>
              <line
                x1=".5"
                y1="4630"
                x2=".5"
                y2="4625"
                fill="none"
                stroke="#ffffff26"
                stroke-miterlimit="10"
              />
              <line
                x1=".5"
                y1="4615.022"
                x2=".5"
                y2="9.989"
                fill="none"
                stroke="#ffffff26"
                stroke-dasharray="0 0 9.978 9.978"
                stroke-miterlimit="10"
              />
              <line
                x1=".5"
                y1="5"
                x2=".5"
                fill="none"
                stroke="#ffffff26"
                stroke-miterlimit="10"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* FEATURES
      {page === "" ? (
        <nav className="navigation-btn-container">
          <div className="navigation-btn">
            <div
              className="nav-btn features-1"
              onClick={() => {
                gsap.to(window, { duration: 0.05, scrollTo: "#feature1" });
              }}
            >
              <p
                id="feature-text1"
                style={{
                  fontSize: "0.9rem",
                  position: "absolute",
                  top: "-10px",
                  left: "55px",
                }}
              >
                Features
              </p>
            </div>
          </div>

          <div
            className="nav-btn features-2"
            onClick={() => {
              gsap.to(window, { duration: 0.1, scrollTo: "#feature2" });
            }}
          >
            <p
              id="feature-text2"
              style={{
                fontSize: "0.9rem",
                position: "absolute",
                top: "-10px",
                left: "55px",
              }}
            >
              Features
            </p>
          </div>

          <div
            className="nav-btn features-3"
            onClick={() => {
              gsap.to(window, { duration: 0.05, scrollTo: "#feature3" });
            }}
          >
            <p
              id="feature-text3"
              style={{
                fontSize: "0.9rem",
                position: "absolute",
                top: "-10px",
                left: "55px",
              }}
            >
              Features
            </p>
          </div>

          <div
            className="nav-btn contact-btn"
            onClick={() => {
              gsap.to(window, { duration: 0.05, scrollTo: "#contact" });
            }}
          >
            <p
              id="feature-text4"
              style={{
                fontSize: "0.9rem",
                position: "absolute",
                top: "-10px",
                left: "55px",
              }}
            >
              Contact
            </p>
          </div>
        </nav>
      ) : (
        <></>
      )} */}
    </div>
  );
}

export default Layout;
