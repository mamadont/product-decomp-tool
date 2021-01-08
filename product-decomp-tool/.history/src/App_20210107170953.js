import './App.css';
import React from 'react';
import Column from './components/column';
// import ColumnTwo from './components/columnTwo';
// import Grid from '@material-ui/core/Grid';
import { DragDropContext } from 'react-beautiful-dnd';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 901, task: 'Step 1'},
        {id: 902, task: 'Step 2'},
        {id: 903, task: 'Step 3'}
      ]
    }
  }
  
    
  
  onDragEnd = result => {
    const item = Array.from(this.state.data);
    console.log(result);
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
