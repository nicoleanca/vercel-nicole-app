import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styles from '../cora_dnd.module.css'
import CoraDndPiece from '../cora_dnd_piece'



const Item = ({ text, index }) => {
  return (
    <Draggable draggableId={text} index={index}>
      {provided => (
        <div
          className={styles.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CoraDndPiece item={text} />
        </div>
      )}
    </Draggable>
  )
}

export default Item
