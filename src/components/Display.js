import displayStyles from "./Display.module.css";

const Display = ({ number }) => {
  return (
    <div id="display" className={displayStyles.display}>
      {number}
    </div>
  );
};
export default Display;
