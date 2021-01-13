import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Column from './components/column';
// import ColumnTwo from './components/columnTwo';
// import Grid from '@material-ui/core/Grid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import data from './data/data-store';
import Card from './components/card';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: data,
      updatedTasks: []
    }
  }
  
  id2List = {
    droppable: 'tasks',
    droppable2: 'updatedTasks'
  };

getList = id => this.state[this.id2List[id]];

onDragEnd = result => {
  console.log(result);
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
          state = { updatedTasks: items};
      }

      this.setState(state);
  } else {
      const result = move(
          this.state.tasks,
          this.state.updatedTasks,
          source,
          destination
      );

      this.setState({
          tasks: result.droppable1,
          updatedTasks: result.droppable2
      });
  }
};

  render() {
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
                                        text={task}
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