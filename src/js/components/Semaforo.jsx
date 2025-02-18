import React, { useState } from "react";

const Semaforo = () => {
  const [colorRojo, setColorRojo] = useState(false);
  const [colorAmarillo, setColorAmarillo] = useState(false);
  const [colorVerde, setColorVerde] = useState(false);

  const handler = (e) => {
    if (e.target.classList.contains("rojo")) {
      setColorRojo(true);
      setColorAmarillo(false);
      setColorVerde(false);
    } else if (e.target.classList.contains("amarillo")) {
      setColorAmarillo(true);
      setColorVerde(false);
      setColorRojo(false);
    } else if (e.target.classList.contains("verde")) {
      setColorAmarillo(false);
      setColorVerde(true);
      setColorRojo(false);
    }
  };

  return (
    <div className="container">
      <div className="linea"></div>
      <div className="semaforo">
        <div
          className={`rojo ${colorRojo ? "sombra" : ""}`}
          onClick={handler}
        ></div>
        <div
          className={`amarillo ${colorAmarillo ? "sombra" : ""}`}
          onClick={handler}
        ></div>
        <div
          className={`verde ${colorVerde ? "sombra" : ""}`}
          onClick={handler}
        ></div>
      </div>
    </div>
  );
};

export default Semaforo;
