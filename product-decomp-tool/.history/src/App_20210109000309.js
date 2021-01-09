import './App.css';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



class App extends React.Component {
  render() {
    return(
      <div class="app">
        <DragDropContext onDragEnd={ result => console.log(result)}>

        </DragDropContext>

      </div>
    )
    
  }
}
  export default App;