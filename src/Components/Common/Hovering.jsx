import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Hovering = ({number,tittle, img,paragh}) => {
  return (
    <div className='h-full  overflow-hidden group cursor-pointer '>
        <div className='Backimage  h-full w-full relative'>
            <img src={img}  className="
  h-full w-full object-cover
  opacity-0 scale-100
  group-hover:opacity-100 group-hover:scale-110
  transition-all duration-1000 ease-in-out
" alt="" />



            <div className='Actay h-full w-full pt-5 flex   items-center justify-start flex-col absolute px-2 top-0 left-0 z-99 opacity-100 text-black group-hover:text-white
                     transition-colors duration-500'>
                <div className=' w-full '>
                    <h1 className='text-[23vw] leading-80'>{number}</h1>
                    <h2 className='text-[3.1vw] tracking-tight leading-12'>{tittle}</h2>
                </div>
                <div className='Actay   pt-10 mt-2 flex items-center justify-center gap-10 w-full '>
                    <div className='h-full   flex items-center justify-center w-full   '>
                        <h4 className='text-[1vw]'>{paragh}</h4>
                    </div>
                    <div className='h-full flex items-center justify-center  '>
                        <div className='h-14 flex items-center justify-center w-14 rounded-full bg-white text-black'>
                        <FaArrowRightLong className='text-[1vw]' />

                        </div>
                    </div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Hovering
