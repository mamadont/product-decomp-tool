import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import './App.css';

const tasks = [
  { id: uuid(), content: "First task", week: 1 },
  { id: uuid(), content: "Second task", week: 2 },
  { id: uuid(), content: "Third task", week: 3 },
  { id: uuid(), content: "Fourth task", week: 4 },
  { id: uuid(), content: "Fifth task", week: 5 }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'unordered': {
        name: "Unordered Tasks",
        items: tasks
      },
      'ordered': {
        name: "Ordered Tasks",
        items: []
      },
    };
  }
 
  

  

  render(){
    var onDragEnd = (result, columns)  => {

      if (!result.destination) return;
      const { source, destination } = result;
    
      // If the draggable is placed in a different column 
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);

        // Set state 
        this.setState({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems
          }
        })
    
      }
      
      // Reordering within the same column
      else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
    
        // Set state
        this.setState({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems
          },
        })
      }  
    };

    var printC = () => {
      console.log(this.state.ordered.items);
    }
    var columns = this.state;
    return (
      <div className="app">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                className="column-container"
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="column"
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                    className="task-card"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
        <button onClick={() => {printC}>Print Comments </button>
      </div>
    );

  }
  
}

export default App;
