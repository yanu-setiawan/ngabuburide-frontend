import React from "react";

function Loader() {
  return (
    <div className="w-full min-h-[44vh] flex justify-center items-center">
      <div className="loading">
        <span>R</span>
        <span>A</span>
        <span>Z</span>
        <span>Y</span>
        <span>R</span>
      </div>
    </div>
  );
}

export default Loader;
