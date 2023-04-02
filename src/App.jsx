import React, { useState } from "react";
import Form from "./components/Form.jsx";
import "./css/style.css";
import Colors from "./components/Colors.jsx";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [color, setColor] = useState("#120");
  const [colorsList, setColorsList] = useState(new Values("#120").all(10));
  const addColor = (clr) => {
    try {
      const newclr = new Values(clr).all(10);
      setColorsList(newclr);
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <main>
      <Form
        color={color}
        setColor={setColor}
        colorsList={colorsList}
        setColorsList={setColorsList}
        addColor={addColor}
      />
      <Colors colorsList={colorsList} />
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

export default App;
