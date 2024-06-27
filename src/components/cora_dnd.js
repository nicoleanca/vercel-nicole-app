import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ListManager } from "react-beautiful-dnd-grid";
import CoraDndPiece from "./cora_dnd_piece";

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

const CoraDnd = () => {

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

  function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  //on page load, randomise elements
  useEffect(() => {
    let arr = [0,1,2,3,4,5,6,7,8];
    shuffle(arr);
    console.log(arr);

    let i=0;
    let shuffledElements = initElements.map((x,index) => { 
      x.order = arr[index];
      return x;
    }
    );

    console.log(shuffledElements);
    setElements([...shuffledElements]);

    sortList(shuffledElements);
  }, []);

  function sortList(list) {
    const list1 = list.slice().sort((first, second) => first.order - second.order);
    const list2 = list1.map((l, index) => ({ ...l, order: index }));
    console.log(list2);
    setElements([...list2]);
  }

  const reorderList = (sourceIndex, destinationIndex) => {
    if (destinationIndex === sourceIndex) {
      return;
    }
    const list = elements;
    // if (destinationIndex === 0) {
    //   list[sourceIndex].order = list[0].order - 1;
    //   console.log(list);
    //   sortList(list);
    //   return;
    // }
    // if (destinationIndex === list.length - 1) {
    //   list[sourceIndex].order = list[list.length - 1].order + 1;
    //   console.log(list);
    //   sortList(list);
    //   return;
    // }
    // if (destinationIndex < sourceIndex) {
    //   list[sourceIndex].order =
    //     (list[destinationIndex].order + list[destinationIndex - 1].order) / 2;
    //     console.log(list);
    //     sortList(list);
    //   return;
    // }
    // list[sourceIndex].order =
    //   (list[destinationIndex].order + list[destinationIndex + 1].order) / 2;
    //   console.log(list);
    //   sortList(list);

    
      list[sourceIndex].order = destinationIndex;
      list[destinationIndex].order = sourceIndex;
      console.log(list);
      sortList(list);
      
      return;
    
    // if (destinationIndex === list.length - 1) {
    //   list[sourceIndex].order = list[list.length - 1].order + 1;
    //   console.log(list);
    //   sortList(list);
    //   return;
    // }
    // if (destinationIndex < sourceIndex) {
    //   list[sourceIndex].order =
    //     (list[destinationIndex].order + list[destinationIndex - 1].order) / 2;
    //     console.log(list);
    //     sortList(list);
    //   return;
    // }
    // list[sourceIndex].order =
    //   (list[destinationIndex].order + list[destinationIndex + 1].order) / 2;
    //   console.log(list);
    //   sortList(list);
  };


  return (
    <div className=''>
      <p> Cora puzzle </p>
      Puzzle drag and drop with a pic of Cora:
      Make the 9 images.
      Random them in the dnd.
      When correct order - display I am a dog mom and make dnd unavailable.
      Inspired by https://codesandbox.io/p/sandbox/react-beautiful-dnd-grid-vypgtd.

      <div className={styles.dndcontext}>
        <ListManager
          items={elements}
          direction="horizontal"
          maxItems={3}
          render={item =>  <CoraDndPiece item={item} />}
          onDragEnd={(sourceIndex, destinationIndex) => reorderList(sourceIndex, destinationIndex)}       
        />     
      </div>

    </div>
  );
};

export default CoraDnd;
