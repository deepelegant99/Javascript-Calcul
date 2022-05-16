import displayStyles from "./Display.module.css";

const Display = ({ exp }) => {
  return (
    <div id="display" className={displayStyles.display}>
      {exp || "0"}
    </div>
  );
};
export default Display;
