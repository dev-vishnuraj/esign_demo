import React from "react";
import styles from "./styles.module.css";

export function Modal({ onClose, children, isVisible, style, positionTop }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.outer}>
      <div className={styles.background} onClick={onClose} />
      <div className={{ ...styles.container, ...style }}>{children}</div>
    </div>
  );
}
