import React from "react";
import SingleColor from "./SingleColor.jsx";

const Colors = ({ colorsList, grid }) => {
  return (
    <div className={grid ? "colors grid" : "colors"}>
      {colorsList.map((color, index) => {
        return <SingleColor color={color} index={index} key={index} />;
      })}
    </div>
  );
};

export default Colors;
