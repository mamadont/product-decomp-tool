import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import './page-1.css';

const tasks = [
    { id: uuid(), content: "Methods task 2"},
    { id: uuid(), content: "Methods task 3"},
    { id: uuid(), content: "Declare method with the name, return type, and necessary parameters"},
    
  ];


  class Page5 extends React.Component {
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
      }
  
      var printC = () => {
        var modal = document.getElementById("modal");
        var close = document.getElementById("close-btn");
        modal.style.display = "block";
  
        close.onclick = () =>{
          modal.style.display = "none";
        }
  
      }
  
      var columns = this.state;
  
      return (
        
        <div className="page-app">
          <div className="drag-context">
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div
                    className="column-container"
                    key={columnId}
                  >
                    <h2 className="headers">{column.name}</h2>
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
                                  ? "#343d52"
                                  : "#01172F",
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
                                              ? "#858b97"
                                              : "#00635D",
                                            color: "#b2d8d8",
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
              
            <div id="modal">
              <div className="modal-content">
                <span id="close-btn" class="close">&times;</span>
                <h3> Copy comments below </h3>
                {this.state.ordered.items.map((item, index) => {
                  return(
                    <p> // {item.content}</p>
                  );
                })}
              </div>
            </div>
          </div>
          <button id="btn" onClick={printC}>Print comments</button>
        </div>
        
      );
    }
    
  }

  export default Page5;