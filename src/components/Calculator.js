import Display from "./Display";
import Keypad from "./Keypad";
import calculatorStyles from "./Calculator.module.css";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [exp, setExp] =useState("")
  return (
    <div className={calculatorStyles.body}>
      <Display exp={exp} />
      <Keypad exp={exp} setExp={setExp} />
    </div>
  );
};
export default Calculator;
