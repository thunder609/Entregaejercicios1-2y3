import React from "react";

const noconectado = ({ handleEvent }) => {
  return <button onClick={e => handleEvent(false)}>No Conectado</button>;
};

export default noconectado;