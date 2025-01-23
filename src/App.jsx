import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const GreenRectangle = ({ style }) => {
  return <div className="green-rectangle" style={style}></div>;
};

const App = () => {
  return (
    <div className="app-container">
      <div className="rectangles-container">
        <GreenRectangle
          style={{ top: "10%", left: "2%", width: "100px", height: "100px" }}
        />
        <GreenRectangle
          style={{ top: "10%", left: "20%", width: "75px", height: "25px" }}
        />
      </div>
    </div>
  );
};

export default App;
