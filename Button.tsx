import React from "react";
import { ButtonProps } from './ButtonProps'; //Importamos Interfaz desde tu propio archivo

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return (
      <button className="operator" onClick={onClick}>
        {value}
      </button>
  );
};
  
export default Button;