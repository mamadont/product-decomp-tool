import './App.css';
import React from 'react';
// import Column from './components/column';
// import ColumnTwo from './components/columnTwo';
// import Grid from '@material-ui/core/Grid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import data from './data/data-store';
import Card from './components/card';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: data
    }
  }
  
    
  
  onDragEnd = result => {
    console.log(result);
    // Store a copy of the data
    const items = Array.from(this.state.tasks);

    // Get the card that was dragged 
    const reOrderedItem = items.splice(result.source.index,1);

    // Reposition the array 
    items.splice(result.destination.index, 0, reOrderedItem);

    // Reflect the changes 
    this.setState({tasks: items});
  }


  render() {
    

    return (
        <div id="app">
        <h1> Problem Decomposition Tool </h1>
          <div id="tool-container"> 
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable droppableId="droppable-1">
                  {(provided) => (
                      <div 
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          id="column"
                      > 
                        {this.state.tasks.map(({id, task}) => {
                              return( 
                                  <Draggable draggableId={task} key={id} index={id}>
                                      {(provided) =>(
                                          <Card 
                                          innerRef={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          step={task}
                                          />
                                      )}
                                  </Draggable>        
                              );
                          })}
                          {provided.placeholder}
                      </div>
                  )}
              </Droppable>
            </DragDropContext>
          </div>
      </div>
      
      
    );
  }
  
}

export default App;
