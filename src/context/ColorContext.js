import React, { useState, useEffect } from "react";

const ColorContext = React.createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState({
    color: localStorage.getItem('kColor') ?? "#32CBBB",
    bgColor: localStorage.getItem('kBgColor') ?? "#0C191D",
  });

  // useEffect(() => {
  //   const storedColor = localStorage.getItem("color");
  //   const storedBgColor = localStorage.getItem("bgColor");

  //   if (storedColor && storedBgColor) {
  //     setColor({ color: storedColor, bgColor: storedBgColor });
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("color", color.color);
  //   localStorage.setItem("bgColor", color.bgColor);
  // }, [color]);

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
