import './App.css';
import React from 'react';
import Column from './components/column';
// import ColumnTwo from './components/columnTwo';
// import Grid from '@material-ui/core/Grid';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import data from './data/data-store';
import Card from './components/card';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: data
    }
  }
  
    
  
  drag(){
    const draggable = document.querySelectorAll(Card);
    const columns = document.querySelectorAll(Column);

    draggable.forEach(draggable, () => {
      draggable.addEventListener("dragstart", () => {
        console.log()
      })
    })
  }


  render() {
    return (
        <div id="app">
        <h1> Problem Decomposition Tool </h1>
          <div id="tool-container"> 
            <Column></Column>
          </div>
      </div>
      
      
    );
  }
  
}

export default App;
