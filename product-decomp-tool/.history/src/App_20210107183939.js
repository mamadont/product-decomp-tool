import './App.css';
import React from 'react';
import Column from './components/column';
// import ColumnTwo from './components/columnTwo';
// import Grid from '@material-ui/core/Grid';
import { DragDropContext } from 'react-beautiful-dnd';
import data from './data/data-store';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [ {id: 0, task: 'Step 1'}, {id: 1, task: 'Step 2'}, {id: 2, task: 'Step 3'}],
      newData: []
    }
  }
  
    
  
  onDragEnd = result => {
    console.log(result);
    // Store a copy of the data
    const items = Array.from(this.state.data);

    // Get the card that was dragged 
    const reOrderedItem = items.splice(result.source.index,1);

    // Reposition the array 
    items.splice(result.destination.index, 0, reOrderedItem);

    // Reflect the changes 
    this.setState({data: items});
  }


  render() {
    

    return (
        <div id="app">
        <h1> Problem Decomposition Tool </h1>
          <div id="tool-container"> 
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Column></Column>
            </DragDropContext>
          </div>
      </div>
      
      
    );
  }
  
}

export default App;