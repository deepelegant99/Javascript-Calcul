import { useEffect } from "react/cjs/react.production.min";
import KeypadStyle from "./Keypad.module.css";

const Keypad = ({ exp, setExp }) => {
  const handleClick = (event) => {
    event.preventDefault();

    // if (event.target.name === "=") {
    //   setExp((exp) => eval(exp));
    // } else {
    //   setExp((exp) => exp.concat(event.target.name));
    // }

    // const val = event.target.value;
    const val = event.currentTarget.value;
    switch (val) {
      case "=":
        setExp((exp) => eval(exp).toString());
        break;
      case "AC":
        setExp("");
        break;
      default:
        console.log(val);
        setExp((exp) => exp.concat(val));
    }
  };

  return (
    <div className={KeypadStyle.keyPad}>
      <button
        id="clear"
        className={KeypadStyle.clear}
        value="AC"
        onClick={(event) => handleClick(event)}
      >
        AC
      </button>
      <button
        id="divide"
        className={KeypadStyle.divide}
        value="/"
        onClick={(event) => handleClick(event)}
      >
        <span> /</span>
      </button>
      <button
        id="zero"
        className={KeypadStyle.zero}
        value="0"
        onClick={(event) => handleClick(event)}
      >
        <span> 0</span>
      </button>
      <button
        id="one"
        className={KeypadStyle.one}
        value="1"
        onClick={(event) => handleClick(event)}
      >
        <span> 1 </span>
      </button>
      <button
        id="two"
        className={KeypadStyle.two}
        value="2"
        onClick={(event) => handleClick(event)}
      >
        <span> 2 </span>
      </button>
      <button
        id="three"
        className={KeypadStyle.three}
        value="3"
        onClick={(event) => handleClick(event)}
      >
        <span> 3</span>
      </button>
      <button
        id="four"
        className={KeypadStyle.four}
        value="4"
        onClick={(event) => handleClick(event)}
      >
        <span>4 </span>
      </button>
      <button
        id="five"
        className={KeypadStyle.five}
        value="5"
        onClick={(event) => handleClick(event)}
      >
        <span>5</span>
      </button>
      <button
        id="six"
        className={KeypadStyle.six}
        value="6"
        onClick={(event) => handleClick(event)}
      >
        <span>6</span>
      </button>
      <button
        id="seven"
        className={KeypadStyle.seven}
        value="7"
        onClick={(event) => handleClick(event)}
      >
        <span>7</span>
      </button>
      <button
        id="eight"
        className={KeypadStyle.eight}
        value="8"
        onClick={(event) => handleClick(event)}
      >
        <span>8</span>
      </button>
      <button
        id="nine"
        className={KeypadStyle.nine}
        value="9"
        onClick={(event) => handleClick(event)}
      >
        <span>9</span>
      </button>
      <button
        id="multiply"
        className={KeypadStyle.multiply}
        value="*"
        onClick={(event) => handleClick(event)}
      >
        <span>x</span>
      </button>
      <button
        id="add"
        className={KeypadStyle.add}
        value="+"
        onClick={(event) => handleClick(event)}
      >
        <span>+</span>
      </button>
      <button
        id="subtract"
        className={KeypadStyle.subtract}
        value="-"
        onClick={(event) => handleClick(event)}
      >
        <span>-</span>
      </button>
      <button
        id="decimal"
        className={KeypadStyle.decimal}
        value="."
        onClick={(event) => handleClick(event)}
      >
        <span>.</span>
      </button>
      <button
        id="equals"
        className={KeypadStyle.equals}
        value="="
        onClick={(event) => handleClick(event)}
      >
        <span>=</span>
      </button>
    </div>
  );
};
export default Keypad;
