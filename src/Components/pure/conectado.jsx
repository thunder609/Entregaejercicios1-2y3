import React from "react";

const Conectado = ({ handleEvent }) => {
  return <button onClick={e => handleEvent(true)}>Conectado</button>;
};

export default Conectado;