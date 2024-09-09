import { useContext, useEffect } from "react";
import PageContext from "../../context/PageContext";

function Slider() {
  const { setPage } = useContext(PageContext);

  useEffect(() => {
    setPage(() => "");
  }, [setPage]);

  return (
    <section className="hero">
      <div className="slider-section">


        <div
          x-data="{}"
          x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
          className="slider-negative w-[1000px] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >

            <li>
              <img
                src={require("../../assets/images/univ/nlb.png")}
                style={{ width: "150px" }}
                alt="Disney"
              />
            </li>
            <li>
              <img
                src={require("../../assets/images/univ/spirstart.png")}
                style={{ width: "150px" }}
                alt="Airbnb"
              />
            </li>
            <li>
              <img
                src={require("../../assets/images/univ/stoneage.png")}
                style={{ width: "150px" }}
                alt="Apple"
              />
            </li>
            <li>
              <img
                src={require("../../assets/images/univ/conjet.png")}
                style={{ width: "150px" }}
                alt="Spark"
              />
            </li>
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >

            <li>
              <img
                src={require("../../assets/images/univ/nlb.png")}
                style={{ width: "150px" }}
                alt="Disney"
              />
            </li>
            <li>
              <img
                src={require("../../assets/images/univ/spirstart.png")}
                style={{ width: "150px" }}
                alt="Airbnb"
              />
            </li>
            <li>
              <img
                src={require("../../assets/images/univ/stoneage.png")}
                style={{ width: "150px" }}
                alt="Apple"
              />
            </li>
            <li>
              <img
                src={require("../../assets/images/univ/conjet.png")}
                style={{ width: "150px" }}
                alt="Spark"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Slider;
