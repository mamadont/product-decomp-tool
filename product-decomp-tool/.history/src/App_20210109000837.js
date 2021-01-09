import './App.css';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';

const tasks = [
  {id: 0, task: 'Step 1'},
  {id: 0, task: 'Step 1'},
]
const col = [
  {
    [uuid()]: {
      name: 'Unorders Tasks',
      items: [tasks]

    }
  }
];

function App() {
    return(
      <div class="app">
        <DragDropContext onDragEnd={ result => console.log(result)}>

        </DragDropContext>
      </div>
    )
  
}
  export default App;