
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'
import render01 from './images/01AnaPerspektif.jpg'
import render02 from './images/Image01.png'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Torus } from './components/Torus'
import ProjectCard from './components/ProjectCard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Works from './components/Works'
import Works_Mix from './components/Works_Mix'
import Works_Mix_Int from './components/Work_Mix_Int'
import Works_V01 from './components/Work_V01'
import Works_V01_Int from './components/Works_V01_Int'
import Works_V02 from './components/Works_V02'
import Works_V02_Int from './components/Works_V02_Int'
import Works_Carport from './components/Works_Carport'
import { Villa01_3D } from './components/V01_3D'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
    
      <div className='h-screen w-screen flex flex-col justify-center items-center 
      text-center bg-gradient-to-b from-[#393a39] to-[#191a1a] '
      >
        <Router>
          <Routes>
            <Route path='/codesignweb' element={<Hero/>} ></Route>
            <Route path='/codesignweb/Welcome' element={<Welcome/>} ></Route>
            <Route path='/codesignweb/Works' element={<Works/>} ></Route>
            <Route path='/codesignweb/Works/MixedUse' element={<Works_Mix/>} ></Route>
            <Route path='/codesignweb/Works/MixedUse/Interiors' element={<Works_Mix_Int/>} ></Route>
            <Route path='/codesignweb/Works/V01' element={<Works_V01/>} ></Route>
            <Route path='/codesignweb/Works/V01/Interiors' element={<Works_V01_Int/>} ></Route>
            <Route path='/codesignweb/Works/V01/3D' element={<Villa01_3D/>} ></Route>
            <Route path='/codesignweb/Works/V02' element={<Works_V02/>} ></Route>
            <Route path='/codesignweb/Works/V02/Interiors' element={<Works_V02_Int/>} ></Route>
            <Route path='/codesignweb/Works/Carport' element={<Works_Carport/>} ></Route>
            <Route path='/codesignweb/About' element={<About/>} ></Route>
            <Route path='/codesignweb/Contact' element={<Contact/>} ></Route>
          </Routes>
        </Router>
        
      </div>
    </>
  )
}

export default App
