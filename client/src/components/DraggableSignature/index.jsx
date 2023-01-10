import Draggable from "react-draggable";
import { FaCheck, FaTimes } from "react-icons/fa";
import { errorColor, goodColor } from "../../utils/Colors/colors";
import styles from "./styles.module.css";

export default function DraggableSignature({ url, onEnd, onSet, onCancel }) {
  return (
    <Draggable onStop={onEnd}>
      <div className={styles.container}>
        <div className={styles.controls}>
          <div className={styles.smallButton} onClick={onSet}>
            <FaCheck color={goodColor} />
          </div>
          <div className={styles.smallButton} onClick={onCancel}>
            <FaTimes color={errorColor} />
          </div>
        </div>
        <img
          src={url}
          width={200}
          alt="sign"
          className={styles.img}
          draggable={false}
        />
      </div>
    </Draggable>
  );
}
