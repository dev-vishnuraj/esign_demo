import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./styles.module.css";

const Drop = ({ onLoaded }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onLoaded(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf"
  });

  return (
    <div {...getRootProps()} className={styles.container}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop a PDF here</p> : <p>Drag a PDF here</p>}
    </div>
  );
};

export default Drop;
