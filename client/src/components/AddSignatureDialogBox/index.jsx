import { DialogBox } from "../DialogBox";
import SignatureCanvas from "react-signature-canvas";
import { ConfirmOrCancel } from "../ConfirmOrCancel";
import { useRef } from "react";
import styles from "./styles.module.css";

export function AddSignatureDialogBox({
  onConfirm,
  onClose,
  autoDate,
  setAutoDate
}) {
  const signRef = useRef(null);

  return (
    <DialogBox
      isVisible={true}
      title={"Add signature"}
      body={
        <div className={styles.container}>
          <div className={styles.sigContainer}>
            <div className={styles.sigBlock}>
              <SignatureCanvas
                velocityFilterWeight={1}
                ref={signRef}
                canvasProps={{
                  width: "600",
                  height: 200,
                  className: "sigCanvas"
                }}
              />
            </div>
          </div>
          <div className={styles.instructionsContainer}>
            <div className={styles.instructions}>
              <div>
                Auto date/time{" "}
                <input
                  type={"checkbox"}
                  checked={autoDate}
                  onChange={(e) => setAutoDate(e.target.checked)}
                />
              </div>
              <div>Draw your signature above</div>
            </div>
          </div>

          <ConfirmOrCancel
            onCancel={onClose}
            onConfirm={() => {
              const signatureURL = signRef.current.toDataURL();
              onConfirm(signatureURL);
            }}
          />
        </div>
      }
    />
  );
}
