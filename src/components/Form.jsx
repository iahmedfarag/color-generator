import React from "react";

const Form = ({ color, setColor, addColor }) => {
  const hadleSumbit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <div className="navbar">
      <div className="container">
        <form onSubmit={hadleSumbit}>
          <input
            type="color"
            className="colorFilter"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <input
            type="text"
            className="colorInput"
            placeholder="#120"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            style={{ borderBottom: `5px solid ${color}` }}
          />
          <button type="sumbit" className="formBtn">
            Sumbit
          </button>
        </form>
        <div className="control">
          <i className="fa-solid fa-grip-lines"></i>
          <i className="fa-solid fa-grip-lines-vertical"></i>
        </div>
      </div>
    </div>
  );
};

export default Form;
