import { BigButton } from "../BigButton";
import React from "react";
import styles from "./styles.module.css";

export function ConfirmOrCancel({
  onCancel,
  onConfirm,
  confirmTitle = "Confirm",
  leftBlock,
  hideCancel,
  disabled
}) {
  return (
    <div className={styles.actions}>
      <div>{leftBlock}</div>
      <div>
        {!hideCancel ? (
          <BigButton
            title={"Cancel"}
            className={styles.cancel}
            onClick={onCancel}
          />
        ) : null}
        <BigButton
          title={confirmTitle}
          inverted={true}
          onClick={onConfirm}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
