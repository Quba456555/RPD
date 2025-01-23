import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const GreenRectangle3 = ({ style }) => {
  return <div className="green-rectangle" style={style}></div>;
};

const App3 = () => {
  return (
    <div className="app-container3">
      <div className="rectangles-container3">
        <GreenRectangle3
          style={{ top: "35%", left: "26%", width: "355px", height: "100px" }}
        />
      </div>
    </div>
  );
};

export default App3;
