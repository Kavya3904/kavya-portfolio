import React, { lazy, Suspense } from "react";
import TopNav from "./Components/SideNav/Sidebar";
import "./App.css";
const AboutMe = lazy(() => import("./Components/AboutMe/AboutMe"));
const ProjectComponent = lazy(() =>
  import("./Components/Projects/ProjectComponent")
);

export default function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="AppAboutContainer">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="AboutCardContainer">
            <AboutMe />
          </div>
          <div className="DetailContainer">
            <ProjectComponent />
          </div>
        </Suspense>
      </div>
    </div>
  );
}