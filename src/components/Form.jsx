import React from "react";

const Form = ({ color, setColor, addColor, setGrid }) => {
  const hadleSumbit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <div className="navbar">
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
        <i
          class="fa-solid fa-grip-lines"
          onClick={() => {
            setGrid(true);
          }}
          style={{ color: color }}
        ></i>
        <i
          class="fa-solid fa-grip-lines-vertical"
          onClick={() => {
            setGrid(false);
          }}
          style={{ color: color }}
        ></i>
      </div>
    </div>
  );
};

export default Form;
