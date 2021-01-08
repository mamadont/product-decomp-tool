import './App.css';
import React from 'react';
import Column from './components/column';
import ColumnTwo from './components/columnTwo';
import Grid from '@material-ui/core/Grid';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


class App extends React.Component {

  onDragEnd = result => {

  }
  render() {
    return (
      
        <div id="app">
        <h1> Problem Decomposition Tool </h1>
          <div id="tool-container"> 
            <DragDropContext>
              <Column></Column>
            </DragDropContext>
          </div>
      </div>
      
      
    );
  }
  
}

export default App;
