import './App.css';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';

const tasks = [
  {id: 0, task: 'Step 1'},
  {id: 0, task: 'Step 1'},
]
const col = [
  {
    [uuid()]: {
      name: 'Unordered Tasks',
      items: [tasks]

    }
  }
];

function App() {
  const [columns, setCol] = useState(col);
    return(
      <div class="app">
        <DragDropContext onDragEnd={ result => console.log(result)}>

        </DragDropContext>
      </div>
    )
  
}
  export default App;