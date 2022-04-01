import Btn from './Btn';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useState } from 'react';

const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function DTestCom() {
  const [items, setItems] = useState(getItems(5));

  const onDragEnd = (result) => {
    // dropped outside the list
    console.log(result.destination);
    if (!result.destination) {
      return;
    }

    // console.log("Old items : ", items);

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    // console.log("New items : ", newItems);

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="1">
        <Btn />
      </Droppable>
    </DragDropContext>

    // <Droppable droppableId="i">
    //   {(provided) => (
    //     <Btn ref={provided.innerRef} {...provided.droppableProps}>
    //       {provided.placeholder}
    //     </Btn>
    //   )}
    // </Droppable>
  );
}

export default DTestCom;
