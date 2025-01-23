import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const GreenRectangle2 = ({ style }) => {
  return <div className="green-rectangle" style={style}></div>;
};

const App2 = () => {
  return (
    <div className="app-container2">
      <div className="rectangles-container2">
        <GreenRectangle2
          style={{ top: "15%", left: "36%", width: "100px", height: "200px" }}
        />
        <GreenRectangle2
          style={{ top: "15%", left: "26%", width: "100px", height: "200px" }}
        />
        <GreenRectangle2
          style={{ top: "15%", left: "31%", width: "100px", height: "200px" }}
        />
      </div>
    </div>
  );
};

export default App2;
