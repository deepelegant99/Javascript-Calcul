import KeypadStyle from "./Keypad.module.css";

const Keypad = ({ exp, setExp }) => {
  const handleClick = (event) => {
    event.preventDefault();

    // if (event.target.name === "=") {
    //   setExp((exp) => eval(exp));
    // } else {
    //   setExp((exp) => exp.concat(event.target.name));
    // }

    switch (event.target.name) {
      case "=":
        setExp((exp) => eval(exp).toString());
        break;
      case "AC":
        setExp("");
        break;
      default:
        setExp((exp) => exp.concat(event.target.name));
    }
  };

  return (
    <div className={KeypadStyle.keyPad}>
      <button
        id="clear"
        className={KeypadStyle.clear}
        name="AC"
        onClick={handleClick}
      >
        AC
      </button>
      <button
        id="divide"
        className={KeypadStyle.divide}
        name="/"
        onClick={handleClick}
      >
        <span> /</span>
      </button>
      <button
        id="zero"
        className={KeypadStyle.zero}
        name="0"
        onClick={handleClick}
      >
        <span> 0</span>
      </button>
      <button
        id="one"
        className={KeypadStyle.one}
        name="1"
        onClick={handleClick}
      >
        <span> 1 </span>
      </button>
      <button
        id="two"
        className={KeypadStyle.two}
        name="2"
        onClick={handleClick}
      >
        <span> 2 </span>
      </button>
      <button
        id="three"
        className={KeypadStyle.three}
        name="3"
        onClick={handleClick}
      >
        <span> 3</span>
      </button>
      <button
        id="four"
        className={KeypadStyle.four}
        name="4"
        onClick={handleClick}
      >
        <span>4 </span>
      </button>
      <button
        id="five"
        className={KeypadStyle.five}
        name="5"
        onClick={handleClick}
      >
        <span>5</span>
      </button>
      <button
        id="six"
        className={KeypadStyle.six}
        name="6"
        onClick={handleClick}
      >
        <span>6</span>
      </button>
      <button
        id="seven"
        className={KeypadStyle.seven}
        name="7"
        onClick={handleClick}
      >
        <span>7</span>
      </button>
      <button
        id="eight"
        className={KeypadStyle.eight}
        name="8"
        onClick={handleClick}
      >
        <span>8</span>
      </button>
      <button
        id="nine"
        className={KeypadStyle.nine}
        name="9"
        onClick={handleClick}
      >
        <span>9</span>
      </button>
      <button
        id="multiply"
        className={KeypadStyle.multiply}
        name="*"
        onClick={handleClick}
      >
        <span>x</span>
      </button>
      <button
        id="add"
        className={KeypadStyle.add}
        name="+"
        onClick={handleClick}
      >
        <span>+</span>
      </button>
      <button
        id="subtract"
        className={KeypadStyle.subtract}
        name="-"
        onClick={handleClick}
      >
        <span>-</span>
      </button>
      <button
        id="decimal"
        className={KeypadStyle.decimal}
        name="."
        onClick={handleClick}
      >
        <span>.</span>
      </button>
      <button
        id="equals"
        className={KeypadStyle.equals}
        name="="
        onClick={handleClick}
      >
        <span>=</span>
      </button>
    </div>
  );
};
export default Keypad;
