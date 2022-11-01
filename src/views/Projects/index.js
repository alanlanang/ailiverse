import React from "react";
import MainView from "./Components/MainView";
import SidePanel from "./Components/SidePanel";

import "./style.scss";

const Projects = () => {
  return (
    <div className="reportContainer">
      <SidePanel />
      <MainView />
    </div>
  );
};

export default Projects;
