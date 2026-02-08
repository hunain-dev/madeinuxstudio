import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SmoothScrolling from './Hooks/SmoothScrolling.jsx'
import Header from './Components/Common/Header.jsx'
import Loader from './Components/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrolling/>
    {/* <Loader/> */}
     <Header/>
    <App />
  </StrictMode>,
)
