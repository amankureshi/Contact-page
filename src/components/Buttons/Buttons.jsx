import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Buttons = ({ isOutline, icon, text }) => {
  // const {  } = props;
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Buttons;
