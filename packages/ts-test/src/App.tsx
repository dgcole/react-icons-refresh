import React from "react";
import "./App.css";
import { IconContext } from "react-icons-refresh";
import { FaBeer } from "react-icons-refresh/fa";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <IconContext.Provider value={{ color: "#fa7" }}>
          <FaBeer />
        </IconContext.Provider>
      </header>
    </div>
  );
};

export default App;
