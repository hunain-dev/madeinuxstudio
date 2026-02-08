import React from "react";

const Image = ({ src, className = "" }) => {
  return (
    <div>
      <img src={src} className={className} alt="" />
    </div>
  );
};

export default Image;
