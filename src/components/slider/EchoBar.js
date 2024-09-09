import React from "react";
import "../../styles/styles.css"; 

function EchoBar() {
  return (
    <div>
      <div className="echobar">
      <img src={require("../../assets/images/univ/echobar.png")} 
        alt="echo"
          className="echobar"
        />
      </div>
    </div>
  );
}

export default EchoBar;
