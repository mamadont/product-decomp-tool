import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Column from './components/column';
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
  
 
    
 reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

onDragEnd = result => {
  const { source, destination } = result;

  // dropped outside the list
  if (!destination) {
      return;
  }

  if (source.droppableId === destination.droppableId) {
      const items = reorder(
          this.state.tasks,
          source.index,
          destination.index
      );

      let state = { items };

      if (source.droppableId === 'droppable2') {
          state = { task: items };
      }

      this.setState(state);
  } else {
      const result = move(
          this.getList(source.droppableId),
          this.getList(destination.droppableId),
          source,
          destination
      );

      this.setState({
          items: result.droppable,
          selected: result.droppable2
      });
  }
};

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
    var labs = ["Lab 1","Lab 2","Lab 3","Lab 4","Lab 5" ]
    return(
      <div>
      <h1> Problem Decomposition Tool </h1>
        <div id="tool-container"> 
          <DragDropContext onDragEnd={this.onDragEnd}>
            
            <Droppable droppableId="droppable1">
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

            <Droppable droppableId="droppable2">
                {(provided) => (
                    <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        id="column"
                    > 
                     
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