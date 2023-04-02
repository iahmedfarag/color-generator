import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const saveToCb = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success(`#${color.hex} copied`);
      } catch (error) {
        toast(error.message);
      }
    } else {
      toast("clipboard not avialable");
    }
  };
  return (
    <div
      className={index >= 10 ? "color light" : "color"}
      style={{ backgroundColor: `#${color.hex}` }}
      onClick={saveToCb}
    >
      <p className="weight">{color.weight}%</p>
      <p className="hex">#{color.hex}</p>
    </div>
  );
};

export default SingleColor;
