import React from 'react'
import Home from './pages/Home/Home'
import Work from './pages/Work/Work'

const App = () => {
  return (
    <div className='h-full w-full bg-[#F7F3ED]'>
      <Home/>
      <Work/>
      <div className='h-screen w-full bg-blue-500'></div>
      
    </div>
  )
}

export default App
