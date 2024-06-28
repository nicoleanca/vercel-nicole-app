import React, { useEffect, useState} from "react";
import styles from './cora_dnd_piece.module.css';


const CoraDndPiece = (props) => {

  const item = props.item;

  return (
    <React.Fragment>
      {item && 
      <img className={styles.imgstyle} src={item} alt="Puzzle pic" />}
    </React.Fragment>
  )
}

export default CoraDndPiece;