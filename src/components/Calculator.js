import Display from "./Display";
import Keypad from "./Keypad";
import calculatorStyles from "./Calculator.module.css";
import { useState, useEffect } from "react";

const Calculator = () => {
  return (
    <div className={calculatorStyles.body}>
      <Display />
      <Keypad />
    </div>
  );
};
export default Calculator;
