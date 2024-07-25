import { Cloudinary } from "@cloudinary/url-gen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Villa01_3D } from "./components/V01_3D";
import Welcome from "./components/Welcome";
import Works_Mix_Int from "./components/Work_Mix_Int";
import Works_V01 from "./components/Work_V01";
import Works from "./components/Works";
import Works_Carport from "./components/Works_Carport";
import Works_Mix from "./components/Works_Mix";
import Works_V01_Int from "./components/Works_V01_Int";
import Works_V02 from "./components/Works_V02";
import Works_V02_Int from "./components/Works_V02_Int";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import "./index.css";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLUDINARY_CLOUD_NAME,
  },
});

function App() {
  const myImage = cld.image("images/MixedUse/14_ttfjta.jpg");
  myImage.resize(fill().width(250).height(250));

  return (
    <>
      <div
        className="h-screen w-screen flex flex-col justify-center items-center 
      text-center bg-gradient-to-b from-[#393a39] to-[#191a1a] "
      >
        <Navbar />
        <AdvancedImage cldImg={myImage} />
        {/* <Router>
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/Welcome" element={<Welcome />}></Route>
            <Route path="/Works" element={<Works />}></Route>
            <Route path="/MixedUse" element={<Works_Mix />}></Route>
            <Route
              path="/MixedUseInteriors"
              element={<Works_Mix_Int />}
            ></Route>
            <Route path="/V01" element={<Works_V01 />}></Route>
            <Route path="/V01Interiors" element={<Works_V01_Int />}></Route>
            <Route path="/V013D" element={<Villa01_3D />}></Route>
            <Route path="/V02" element={<Works_V02 />}></Route>
            <Route path="/V02Interiors" element={<Works_V02_Int />}></Route>
            <Route path="/Carport" element={<Works_Carport />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
