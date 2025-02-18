import React, { useState } from "react";

const Semaforo = () => {
  const [colorRojo, setColorRojo] = useState("");
  const [colorAmarillo, setColorAmarillo] = useState("");
  const [colorVerde, setColorVerde] = useState("");

  const handler = () => {
    if (colorRojo) {
      setColorRojo;
    } else if (colorAmarillo) {
      setColorAmarillo;
    } else {
      setColorVerde;
    }
  };

  return (
    <div className="container">
      <div className="linea"></div>
      <div className="semaforo">
        <div className="rojo" onCLick={handler}></div>
        <div className="amarillo" onCLick={handler}></div>
        <div className="verde" onCLick={handler}></div>
      </div>
    </div>
  );
};

export default Semaforo;
