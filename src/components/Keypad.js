import KeypadStyle from "./Keypad.module.css";

const Keypad = ({ setNumber }) => {
  const handleClick = (event) => {
    console.log(event.target.name);
  };

  return (
    <div className={KeypadStyle.keyPad}>
      {/* <div
        id="clear"
        className={KeypadStyle.clear}
        name="AC"
        onClick={handleClick}
      >
        AC
      </div> */}
      <button
        id="clear"
        className={KeypadStyle.clear}
        name="AC"
        onClick={handleClick}
      >AC</button>
      <div id="divide" className={KeypadStyle.divide}>
        <span> /</span>
      </div>
      <div id="zero" className={KeypadStyle.zero}>
        <span> 0</span>
      </div>
      <div id="one" className={KeypadStyle.one}>
        <span> 1 </span>
      </div>
      <div id="two" className={KeypadStyle.two}>
        <span> 2 </span>
      </div>
      <div id="three" className={KeypadStyle.three}>
        <span> 3</span>
      </div>
      <div id="four" className={KeypadStyle.four}>
        <span>4 </span>
      </div>
      <div id="five" className={KeypadStyle.five}>
        <span>5</span>
      </div>
      <div id="six" className={KeypadStyle.six}>
        <span>6</span>
      </div>
      <div id="seven" className={KeypadStyle.seven}>
        <span>7</span>
      </div>
      <div id="eight" className={KeypadStyle.eight}>
        <span>8</span>
      </div>
      <div id="nine" className={KeypadStyle.nine}>
        <span>9</span>
      </div>
      <div id="multiply" className={KeypadStyle.multiply}>
        <span>x</span>
      </div>
      <div id="add" className={KeypadStyle.add}>
        <span>+</span>
      </div>
      <div id="subtract" className={KeypadStyle.subtract}>
        <span>-</span>
      </div>
      <div id="decimal" className={KeypadStyle.decimal}>
        <span>.</span>
      </div>
      <div id="equals" className={KeypadStyle.equals}>
        <span>=</span>
      </div>
    </div>
  );
};
export default Keypad;
