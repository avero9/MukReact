import React from "react";
import Template from "../../Components/Template/Template";
import Logo from "../../Assets/Images/Muk_Icon.png"
import Home from "../Home/Home";
import Appearances from "../Muk/Appearances";
import Info from "../Info/Info";
import Error from "../404/404";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MukDetails from "../Detail/MukDetails";


function App() {
    const nav = [
        {url: "/", text: "Home", exact: true},
        {url: "/Appearances", text: "Appearances", exact: true},
        {url: "/info", text: "Info", exact: true}
    ];
  return (
    <BrowserRouter>
      <Template
          footerCourseName = "Tecnologie e Applicazioni dei Sistemi Distribuiti"
          footerCourseLink = "https://elearning.unimib.it/course/info.php?id=44672"
          navItems={nav}
          logo={Logo}>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Appearances" element={<Appearances/>}/>
              <Route path="/Appearances/:number" element={<MukDetails/>}/>
              <Route path="/info" element={<Info />}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
      </Template>
    </BrowserRouter>
  );
}

export default App;
