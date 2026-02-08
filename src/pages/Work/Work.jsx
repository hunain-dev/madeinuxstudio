import React from 'react'
import Image from '../../Components/Image'
import  Mobiletrolling from "../../../public/Assets/Images/Mobiletrolling.png"
import  Handover from "../../../public/Assets/Images/Handover.png"

const Work = () => {
  return (
    <div className='h-full w-full  relative'>
<div className="relative h-full w-full">
  <Image
    src={Mobiletrolling}
    className="h-full w-full object-contain"
  />
  <div className="absolute inset-0 bg-black/70"></div>
</div>
      <div className='front h-full px-5 text-white flex items-center justify-start w-full opacity-100  absolute top-0 left-0 z-9'>
        <h2 className='Actay text-4xl tracking-tight'>Brownvase</h2>
      </div>
      <div className='front h-full w-full flex items-center justify-center opacity-100   absolute top-0 left-0 z-12'>
        <div className='min-h-[56vh]  border-1 border-gray-600 relative overflow-hidden w-[26%] rounded-full '>
           <div className='h-full w-full'></div>
           <div className='h-full w-full  flex items-center justify-center absolute top-0 left-0  z-99'>
           <div className='h-50 w-50 border-1 overflow-hidden  top-0 rounded-full'>
            <Image src={Handover} className='h-full w-full object-cover'/>
           </div>

           </div>
           <div className='h-full w-full  flex items-center justify-center absolute top-0 left-0   z-999'>
            <div className='Actay h-full px-9 w-full flex items-center justify-between'>
              <h2 className='text-[1vw] text-white '>/01</h2>
              <h2 className='text-[1vw]  text-[#EBD1A7]'>/04</h2>
            </div>
           </div>

           <div className='h-full w-full  flex items-center  justify-center absolute top-0 left-0   z-1000'>
            <div className='Actay h-full  text-[#dbd4c8] px-9 w-full flex items-center py-6 flex-col justify-between'>
              <h2 className='text-[1vw] '>Featured work</h2>
              <h2 className='text-[1vw] '>Scroll</h2>
            </div>
           </div>


        </div>
      </div>
      
    </div>
  )
}

export default Work
