import React from "react";
import "./loader.css";

const BlurryLoader = () => {
  return (
    <div className="blurry-loader">
      <div className="blurry-loader__overlay"></div>
      <div className="blurry-loader__spinner"></div>
    </div>
  );
};

export default BlurryLoader;
