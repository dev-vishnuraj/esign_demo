import Draggable from "react-draggable";
import { FaCheck, FaTimes } from "react-icons/fa";
import { errorColor, goodColor } from "../../utils/Colors/colors";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

export default function DraggableText({ onEnd, onSet, onCancel, initialText }) {
  const [text, setText] = useState("Text");
  const inputRef = useRef(null);

  useEffect(() => {
    if (initialText) {
      setText(initialText);
    } else {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, []);

  return (
    <Draggable onStop={onEnd}>
      <div style={styles.container}>
        <div style={styles.controls}>
          <div style={styles.smallButton} onClick={() => onSet(text)}>
            <FaCheck color={goodColor} />
          </div>
          <div style={styles.smallButton} onClick={onCancel}>
            <FaTimes color={errorColor} />
          </div>
        </div>
        <input
          ref={inputRef}
          style={styles.input}
          value={text}
          placeholder={"Text"}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </Draggable>
  );
}
