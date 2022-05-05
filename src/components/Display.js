import displayStyles from "./Display.module.css";

const Display = ({ exp }) => {
  return (
    <div id="display" className={displayStyles.display}>
      {exp}
    </div>
  );
};
export default Display;
