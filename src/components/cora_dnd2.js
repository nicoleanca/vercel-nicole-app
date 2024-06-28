import React, { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { ListManager } from "react-beautiful-dnd-grid";
import CoraDndPiece from "./cora_dnd_piece";
import Column from './dnd_components/column'

import puzzle1 from '../images/puzzlepics/image_part_001.jpg';
import puzzle2 from '../images/puzzlepics/image_part_002.jpg';
import puzzle3 from '../images/puzzlepics/image_part_003.jpg';
import puzzle4 from '../images/puzzlepics/image_part_004.jpg';
import puzzle5 from '../images/puzzlepics/image_part_005.jpg';
import puzzle6 from '../images/puzzlepics/image_part_006.jpg';
import puzzle7 from '../images/puzzlepics/image_part_007.jpg';
import puzzle8 from '../images/puzzlepics/image_part_008.jpg';
import puzzle9 from '../images/puzzlepics/image_part_009.jpg';
import styles from "./cora_dnd.module.css";
import { Link } from "react-router-dom";
import { pages } from "../utils/constants";

// const StyledColumns = styled('div', {
//   display: 'grid',
//   gridTemplateColumns: '1fr 1fr 1fr',
//   margin: '10vh auto',
//   width: '80%',
//   height: '80vh',
//   gap: '8px'
// })

const CoraDnd2 = () => {

  const initElements = [
    {
      id: "1",
      order: 0,
      source: puzzle1
    },
    {
      id: "2",
      order: 1,
      source: puzzle2
    },
    {
      id: "3",
      order: 2,
      source: puzzle3
    },
    {
      id: "4",
      order: 3,
      source: puzzle4
    },
    {
      id: "5",
      order: 4,
      source: puzzle5
    },
    {
      id: "6",
      order: 5,
      source: puzzle6
    },
    {
      id: "7",
      order: 6,
      source: puzzle7
    },
    {
      id: "8",
      order: 7,
      source: puzzle8
    },
    {
      id: "9",
      order: 8,
      source: puzzle9
    }
  ];
 
  const [elements, setElements] = useState([]);
  console.log(elements);

  const initialColumns = {
    todo: {
      id: 'todo',
      list: [{source: puzzle1, id: '001'}, {source: puzzle2, id: '002'}, {source: puzzle3, id: '003'}]
    },
    doing: {
      id: 'doing',
      list: [{source: puzzle4, id: '004'}, {source: puzzle5, id: '005'}, {source: puzzle6, id: '006'}]
    },
    done: {
      id: 'done',
      list: [{source: puzzle7, id: '007'}, {source: puzzle8, id: '008'}, {source: puzzle9, id: '009'}]
    }
  }
  const [columns, setColumns] = useState(initialColumns)

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null

    // Set start and end variables
    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter(
        (_, idx) => idx !== source.index
      )

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index])

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList
      }

      // Update the state
      setColumns(state => ({ ...state, [newCol.id]: newCol }))
      return null
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter(
        (_, idx) => idx !== source.index
      )

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList
      }

      // Make a new end list array
      const newEndList = end.list

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index])

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList
      }

      // Update the state
      setColumns(state => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }))
      return null
    }
  }



  return (
    <div className=''>
      <p> Cora puzzle </p>
      Puzzle drag and drop with a pic of Cora:
      Make the 9 images.
      Random them in the dnd.
      When correct order - display I am a dog mom and make dnd unavailable.
      Inspired by https://codesandbox.io/p/sandbox/react-beautiful-dnd-grid-vypgtd.

      <div className={styles.dndcontext2}>
        <DragDropContext className={styles.column} onDragEnd={onDragEnd}>     
            {Object.values(columns).map(col => (
              <Column  col={col} key={col.id} />
            ))}       
        </DragDropContext>
      </div>

    </div>
  );
};

export default CoraDnd2;
