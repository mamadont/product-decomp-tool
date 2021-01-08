import './App.css';
import React from 'react';
import Column from './components/column';
import ColumnTwo from './components/columnTwo';
import Grid from '@material-ui/core/Grid';
import { DragDropContext } from 'react-beautiful-dnd';


class App extends React.Component {

  onDragEnd = result => {

  }
  render() {
    return (
        <DragDropContext>

        
        <div id="app">
        <h1> Problem Decomposition Tool </h1>
          <div id="tool-container"> 
              <Column></Column>
            
          </div>
      </div>
      </DragDropContext>
      
      
    );
  }
  
}

export default App;
