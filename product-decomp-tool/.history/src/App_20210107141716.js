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
      
        <div id="app">
        <h1> Problem Decomposition Tool </h1>
          <div id="tool-container"> 
            
                <Grid container direction="row" justify="center" alignItems="center" spacing="10" >
                    <DragDropContext
                      onDragEnd={this.onDragEnd}
                    >
                      <Grid item xs={4}>
                        <Column></Column>
                      </Grid>
                    </DragDropContext>  

                    <Grid item item xs={4}>
                      <ColumnTwo></ColumnTwo>
                    </Grid>
                  </Grid>
                
          </div>
      </div>
      
      
    );
  }
  
}

export default App;
