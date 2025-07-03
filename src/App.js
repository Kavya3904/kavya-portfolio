import "./App.css";
import React, { useState } from "react";

import AboutMe from "./Components/AboutMe/AboutMe";
import ProjectComponent from "./Components/Projects/ProjectComponent";
import TopNav from "./Components/SideNav/Sidebar";
function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <TopNav />
      <div className="AppAboutContainer">
        <div className="AboutCardContainer">
          <AboutMe />
        </div>
        <div className="DetailContainer">
          <ProjectComponent />
        </div>
      </div>
    </div>
  );
}
export default App;
