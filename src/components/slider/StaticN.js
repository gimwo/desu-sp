import React from "react";
import "../../styles/styles.css"; 

function Static() {
  return (
    <div>
      <div className="static1">
      <img src={require("../../assets/images/univ/nlb.webp")} 
        alt="Image 1"
          className="static-image nlb"
        />
      </div>
    </div>
  );
}

export default Static;
