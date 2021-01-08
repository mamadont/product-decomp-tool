import './App.css';
import React from 'react';
import Column from './components/column';
// import ColumnTwo from './components/columnTwo';
// import Grid from '@material-ui/core/Grid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {DndContext} from '@dnd-kit/core';

import data from './data/data-store';
import Card from './components/card';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: data
    }
  }
  
    
  
  // onDragEnd = result => {
  //   // Store a copy of the data
  //   var items = Array.from(this.state.tasks);
  //   console.log(items);

  //   // Get the card that was dragged 
  //   var reOrderedItem = items.splice(result.source.index,1);

  //   // Reposition the array 
  //   items.splice(result.destination.index, 0, reOrderedItem);

  //   // Reflect the changes 
  //   this.setState({tasks: items});
  // }


  render() {
    return (
        <div id="app">
        <h1> Problem Decomposition Tool </h1>
          <div id="tool-container"> 
            <Column/>
          </div>
      </div>
      
      
    );
  }
  
}

export default App;
