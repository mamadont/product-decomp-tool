import './App.css';
import React from 'react';
// import Column from './components/column';
// import ColumnTwo from './components/columnTwo';
// import Grid from '@material-ui/core/Grid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


class App extends React.Component {

  onDragEnd = result => {
    console.log("Dropped!");
  }
  render() {
    const data = [
      {id: 0, task: 'Step 1'},
      {id: 1, task: 'Step 2'},
      {id: 2, task: 'Step 3'}
  ];
    return (
      
        <div id="app">
        <h1> Problem Decomposition Tool </h1>
          <div id="tool-container"> 
            <DragDropContext>
              <Droppable droppableId="droppable-1">
                {(provided) => (
                  <ul {...provided.droppableProps} ref={provided.innerRef}>
                    {}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </div>
      </div>
      
      
    );
  }
  
}

export default App;
