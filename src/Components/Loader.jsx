import React from 'react'

const Loader = () => {
    const obj = [
        {
            border:"border-l-1 border-black"
        },  {
            border:"border-l-1 border-black"
        },
        {
            border:"border-l-1 border-black"
        },  {
            border:"border-l-1 border-black"
        },  {
            border:"border-l-1 border-black"
        },  {
            border:"border-l-1 border-black"
        },  {
            border:"border-l-1 border-black"
        },  {
            border:"border-l-1 border-black"
        },
        {
            border:"border-l-1 border-black"
        },
        {
            border:"border-l-1 border-black"
        },
        {
            border:"border-l-1 border-black"
        },
    ]
  return (
    <div className='h-screen w-full opacity-100 bg-[#B9BDAB] fixed z-99999 '>
  
                    <div  className="back h-full w-full  relative grid grid-cols-11" >
                        {
                            obj.map((elem,index)=>{
                                return(
                                    <div key={index}   className=" border-l border-gray-500"
                                    style={{backgroundColor:elem.backgroundcolor,border:elem.border}}></div>

                                )
                            })
                        }
            
                </div>

    <div className="front absolute top-0 opacity-100 left-0 bg-blue-500 h-full w-full z-99"></div>

      
    </div>
  )
}

export default Loader
