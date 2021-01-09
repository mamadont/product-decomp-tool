import './App.css';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function App() {
    return(
      <div class="app">
        <DragDropContext onDragEnd={ result => console.log(result)}>

        </DragDropContext>
      </div>
    )
  
}
  export default App;