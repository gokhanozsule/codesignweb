import { Cloudinary } from "@cloudinary/url-gen";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
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
import "./index.css";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLUDINARY_CLOUD_NAME,
  },
});
const cloudinaryUrl = "https://res.cloudinary.com/doeucuf7e/image/upload";

function App() {
  return (
    <>
      <div
        className="h-full w-full flex flex-col justify-center items-center 
      text-center bg-gradient-to-b from-[#393a39] to-[#191a1a] "
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero cloudinaryUrl={cloudinaryUrl} />} />
            <Route
              path="/Welcome"
              element={<Welcome cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/Works"
              element={<Works cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/MixedUse"
              element={<Works_Mix cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/MixedUseInteriors"
              element={<Works_Mix_Int cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/V01"
              element={<Works_V01 cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/V01Interiors"
              element={<Works_V01_Int cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/V013D"
              element={<Villa01_3D cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/V02"
              element={<Works_V02 cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/V02Interiors"
              element={<Works_V02_Int cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/Carport"
              element={<Works_Carport cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/About"
              element={<About cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
            <Route
              path="/Contact"
              element={<Contact cloudinaryUrl={cloudinaryUrl} />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
