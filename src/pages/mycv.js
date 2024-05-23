import * as React from "react";
import { useRef, useEffect } from "react";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import styles from "./mycv.module.css";
import { Document, Page, pdfjs } from "react-pdf";
import { timeout } from "../utils/utils";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CvPage = () => {
  const pdfURL = "/CV_NicoleA.pdf";
  const buttonRef = useRef(null);

  useEffect(() => {
    startAnimation();
  }, [])

  const startAnimation = async () => {
    while (true) {
      if (!buttonRef.current.className.includes(styles.animationMove)) {
        buttonRef.current.className += ` ${styles.animationMove}`;
      } else {
        const lastIndex = buttonRef.current.className.lastIndexOf(" ");
        buttonRef.current.className = buttonRef.current.className.substring(0, lastIndex);
      }
       console.log(buttonRef.current.className);
      await timeout(1000);
    }
  }

  const PDFViewer = () => {
    return (
      <div className={styles.documentWrap}>
        <Document className={styles.documentItem} file={pdfURL}>
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
    );
  };

  return (
    <div className="page-container">
      <NavBar />
      <div className={styles.buttonWrap}>
        <a className={styles.animationButton} ref={buttonRef} href={pdfURL} download>
          Download my CV :)
        </a>
      </div>
      {PDFViewer()}
      
    </div>
  );
};

export default CvPage;
