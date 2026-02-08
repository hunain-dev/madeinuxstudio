import React, { useEffect, useRef } from "react";
import Image from "./Image";
import Logo from "../../public/Assets/Images/logo.png";
import gsap from "gsap";

const Loader = () => {
  const columnsRef = useRef([]);
  const logoRef = useRef(null);

  const obj = Array(11).fill("#B9BDAB"); // 11 columns

  useEffect(() => {
    // Columns all together
    gsap.fromTo(
      columnsRef.current,
      { x: "-100%" }, // start off-screen left
      {
        x: "2%",       // final position
        duration: 1,   // 1 second
        ease: "power2.out",
        marker:true
      }
    );
  
    // Logo fade-in after columns
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 1, // wait 1s for columns
        ease: "power2.out",
      }
    );


  }, []);
  

  return (
    <div className="h-screen w-full fixed z-50 bg-[#B9BDAB] overflow-hidden">
      {/* Columns */}
      <div className="back h-full w-full grid grid-cols-11 relative">
        {obj.map((bg, index) => (
          <div
            key={index}
            ref={(el) => (columnsRef.current[index] = el)}
            className="h-full w-full"
            style={{ backgroundColor: bg }}
          ></div>
        ))}
      </div>

      {/* Logo */}
      <div
        ref={logoRef}
        className="front absolute top-0 left-0 h-full w-full flex items-center justify-center"
      >
        <Image src={Logo} className="h-80 w-80 object-contain" />
      </div>
    </div>
  );
};

export default Loader;
