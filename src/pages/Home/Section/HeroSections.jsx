import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Garden from "../../../../public/Assets/Images/Garden.png"
import Image from '../../../Components/Image';
import Minux from "../../../../public/Assets/Images/Minux.png"
import Hovering from '../../../Components/Common/Hovering';
import phone from "../../../../public/Assets/Images/Mobileapp.png"
import Tablet from "../../../../public/Assets/Images/Tablet.png"
import Branding from "../../../../public/Assets/Images/Branding.png"
import Laptop from "../../../../public/Assets/Images/Laptop.png"


gsap.registerPlugin(ScrollTrigger);

const HeroSections = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(wrapperRef.current, {
        x: () => -(wrapperRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${wrapperRef.current.scrollWidth - window.innerWidth}`,
          scrub: 3,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      className=" text-[#333335]  h-screen  w-full  overflow-hidden"
    >
      <div
        ref={wrapperRef}
        className="flex h-full">
          {/* first slider */}
        <div className="h-full w-full flex-shrink-0 bg-[#D5C8B0]">
          <div className='h-full w-full grid grid-cols-[2.8fr_2fr] '>
            <div className='h-full px-5  py-3 flex items-center justify-between flex-col pt-20  '>
              <div className=' w-full '>
                <h1 className='Actay  text-[4.8vw] leading-16 tracking-tight '>Award-winning <br />
                  design boutique <br />
                  agency</h1>
              </div>
              <div className=' w-full flex items-end gap-26 justify-start overflow-hidden'>
                <div className='h-full p-1  '>
                  <div className='h-50 w-50 rounded-2xl overflow-hidden'>
                    <Image src={Minux} className=' w-full object-cover' />
                  </div>
                </div>
                <div className='h-full py-2  flex items-start justify-between flex-col rounded-2xl'>
                  <h3 className='Actay text-[1vw] text-[#8B8373] w-2xs'>We specialize in bespoke UX/UI design,
                    branding, and blending artistry with
                    innovation to craft scalable, impactful
                    designs that resonate with users and
                    grow with the business</h3>

                  <h6 className='text-[1vw] text-[#8B8373]'>Scroll for More</h6>

                </div>
              </div>
            </div>
            <div className='h-full'>
              <img src={Garden} className='h-full w-full object-cover' alt="" />
            </div>
          </div>
        </div>

          {/* Second slider */}

        <div className="h-full w-full flex-shrink-0  ">
          <div className='h-full w-full grid grid-cols-[5fr_2fr] pt-15 '>
            <div className='h-full flex items-center  gap-16 justify-start flex-col  w-full px-14 '>
              <div className='Actay  gap-11 flex items-start justify-start w-full'>
              <div className="h-fit w-40   justify-center  flex items-start ">
  <span className="inline-block w-2 h-2 mt-1 bg-[#333335] rounded-full mr-2"></span>
  <h2 className=" text-sm">Our Mission</h2>
</div>
                <div className='h-full w-full '>
                  <h3 className='text-[3vw] tracking-tight leading-13 text-'>Redefine the digital landscape by
crafting elegant, human-centered
experiences that seamlessly blend
beauty and functionality</h3>
                </div>
              </div>
              <div className='w-full   flex items-center justify-end'>
                <div className='h-full pt-10 gap-33 flex items-center justify-between flex-col  w-sm'>
                  <h3 className='text-[1.1vw] text-gray-500'>MiUX’s work has been recognized globally with
multiple awards, including FWA, CSS Design Awards,
Awwwards and UX Design Award Berlin, reflecting
our commitment to design excellence and innovative
storytelling.</h3>
<div className=' flex items-start justify-start gap-9 w-full '>
<h3 className="text-[1.4vw] tracking-tight border-b-1 border-black ">
  Experience the work
</h3>  <h3 className='text-[1.4vw]  border-b-1 border-black tracking-tight'>Inquire </h3>
</div>
                </div>
              </div>

            </div>
            <div className='h-full w-full '>
            <Hovering number="1" img={phone} tittle={<>UI/UX 
              <br/>
               Design</>}
               paragh="
Transform complex data into intuitive, visually refined dashboards that empower confident decision-making"
               
               />
            </div>
          </div>
        </div>
        <div className="h-full w-full flex-shrink-0  ">
          <div className='grid grid-cols-3 h-full pt-15 w-full '>
              <Hovering number="2" img={Tablet} tittle={<>Deshboard 
              <br/>
               Design</>}
                          paragh="Built to decode complexity, our dashboards transform data into elegant and intuitive interfaces."
               />
            <Hovering number="3" img={Laptop} tittle={<>Web & app 
              <br/>
               Design</>}
                    paragh="    Crafted for clarity and growth, our web and app experiences are designed to engage and scale seamlessly."
           
               />
            <Hovering number="4" img={Branding} tittle={<>Branding 
              <br/>
               Identity</>}
                        paragh="From strategy and messaging to visual identity, each brand is designed to be scalable, sustainable, and impactful across every digital platform.."
               
         
               />

            </div>
          </div>
        


        </div>
    </section>

  )
}

export default HeroSections
