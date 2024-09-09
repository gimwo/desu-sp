import React from "react";
import "../../styles/styles.css"; 

function Klenco() {
  return (
    <div>
      <div className="klenco">
      <img src={require("../../assets/images/univ/klenco.png")} 
        alt="klenco"
          className="static-image-klenco nlb"
        />
      </div>
    </div>
  );
}

export default Klenco;
