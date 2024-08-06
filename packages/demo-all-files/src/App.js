import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { IconContext } from "@react-icons-refresh/all-files";
import { FaFolder } from "@react-icons-refresh/all-files/fa/FaFolder";
import { MdAccessibility } from "@react-icons-refresh/all-files/md/MdAccessibility";
import { TiArrowDown } from "@react-icons-refresh/all-files/ti/TiArrowDown";
import { GrGrommet } from "@react-icons-refresh/all-files/gr/GrGrommet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <IconContext.Provider
            value={{
              color: "blue",
              className: "global-class-name",
              attr: { focusable: "false" },
            }}
          >
            <MdAccessibility />
            <FaFolder
              color="red"
              title="folder icon"
              className="additional-class-name"
            />
          </IconContext.Provider>
          <MdAccessibility />
          <FaFolder />
          <TiArrowDown title="arrow down icon" />
          <GrGrommet />
        </p>
      </div>
    );
  }
}

export default App;
