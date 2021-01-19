import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import './App.css';
class App extends React.Component {
  render(){

    return (
      
      <div className="app">
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

export default App;
