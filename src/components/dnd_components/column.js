import React from 'react'
import Item from './item'
import { Droppable } from 'react-beautiful-dnd'
import styles from '../cora_dnd.module.css'


const Column = ({ col: { list, id } }) => {
  return (
      <Droppable  droppableId={id}>
        {provided => (
          <div className={styles.column}>
            <h2>{id}</h2>
            <div {...provided.droppableProps} className={styles.list} ref={provided.innerRef}>
              {list.map((element, index) => (
                <Item key={element.id} text={element.source} index={index} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
   
  )
}

export default Column
