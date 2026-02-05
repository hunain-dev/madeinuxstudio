import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import React, { useRef } from 'react'
import { useEffect } from 'react';

const SmoothScrolling = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.08,        // smoothness (0.05 = more smooth)
          multiplier: 1,     // scroll speed
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });
    
        return () => {
          scroll.destroy();
        };
      }, []);
    
  return (
    <div>
      
    </div>
  )
}

export default SmoothScrolling
