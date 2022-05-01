import KeypadStyle from "./Keypad.module.css";
import { useState, useEffect } from "react";

const Keypad = () => {
  const [num, setNum] = useState(0);
  function printNum(a) {
    console.log(a);
  }

  function divide() {}

  function multiply() {}

  return (
    <div className={KeypadStyle.keyPad}>
      <div id="clear" className={KeypadStyle.clear} onClick={divide()}>
        <span>AC</span>
      </div>
      <div id="divide" className={KeypadStyle.divide} onClick={divide()}>
        <span> /</span>
      </div>
      <div id="zero" className={KeypadStyle.zero} onClick={printNum("0")}>
        <span> 0</span>
      </div>
      <div id="one" className={KeypadStyle.one} onClick={printNum("1")}>
        <span> 1 </span>
      </div>
      <div id="two" className={KeypadStyle.two} onClick={printNum("2")}>
        <span> 2 </span>
      </div>
      <div id="three" className={KeypadStyle.three} onClick={printNum("3")}>
        <span> 3</span>
      </div>
      <div id="four" className={KeypadStyle.four} onClick={printNum("4")}>
        <span>4 </span>
      </div>
      <div id="five" className={KeypadStyle.five} onClick={printNum("5")}>
        <span>5</span>
      </div>
      <div id="six" className={KeypadStyle.six} onClick={printNum("6")}>
        <span>6</span>
      </div>
      <div id="seven" className={KeypadStyle.seven} onClick={printNum("7")}>
        <span>7</span>
      </div>
      <div id="eight" className={KeypadStyle.eight} onClick={printNum("8")}>
        <span>8</span>
      </div>
      <div id="nine" className={KeypadStyle.nine} onClick={printNum("9")}>
        <span>9</span>
      </div>
      <div id="multiply" className={KeypadStyle.multiply} onClick={multiply()}>
        <span>x</span>
      </div>
      <div id="add" className={KeypadStyle.add} onClick={multiply()}>
        <span>+</span>
      </div>
      <div id="subtract" className={KeypadStyle.subtract} onClick={multiply()}>
        <span>-</span>
      </div>
      <div id="decimal" className={KeypadStyle.decimal} onClick={multiply()}>
        <span>.</span>
      </div>
      <div id="equals" className={KeypadStyle.equals} onClick="">
        <span>=</span>
      </div>
    </div>
  );
};
export default Keypad;
