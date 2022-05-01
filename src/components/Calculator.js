import Display from "./Display";
import Keypad from "./Keypad";
import calculatorStyles from "./Calculator.module.css";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [number, setNumber] =useState(0)
  return (
    <div className={calculatorStyles.body}>
      <Display number={number} />
      <Keypad setNumber={setNumber} />
    </div>
  );
};
export default Calculator;
