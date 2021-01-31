import React from "react";
import './App.css';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './components/page-1.css';
import uuid from "uuid/v4";

const tasks = [];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'unordered': {
        name: "Unordered Steps",
        items: tasks
      },
    };
  }

    // Generates card based on index
    add = (index) => { 
        switch(index){
          case 0: 
            tasks.push({id: uuid(), content: "If", hint: "Condition"});
          break;

          case 1: 
            tasks.push({id: uuid(), content: "Else"});
          break;

          case 2: 
            tasks.push({id: uuid(), content: "Begin Loop",  hint:"Loop Condition"});
            tasks.push({id: uuid(), content: "End Loop"});
          break;

          case 3: 
            tasks.push({id: uuid(), content: "Create file", hint: "File name"});
          break;
          
          case 4: 
            tasks.push({id: uuid(), content: "Create method", hint: "Method name"});
            tasks.push({id: uuid(), content: "Call method", hint: "Method name"});
          break;

          case 5: 
            tasks.push({id: uuid(), content: "Create object", hint: "Object name"});
            tasks.push({id: uuid(), content: "Instantiate object", hint: "Object name"});
          break;

          case 6: 
            tasks.push({id: uuid(), content: "Initialize array"});
          break;

          case 7: 
            tasks.push({id: uuid(), content: "Create class"});
          break;
  
          default:
            console.log("Invalid index");
        }
        
        this.setState({
          unordered: {
            items: tasks
          }
        })
      }

      changeHint = (id) => {
        // Get an instance of the tasks array 
        var tasks = this.state.unordered.items;

        // Store text in input field
        var input = document.getElementById(id).value;

        // Change task hint
        var tempTask = tasks.find(task => task.content = id);
        tempTask.hint = input; 

        // Loop through array and mutate
        tasks.map((item) => {
          
        })

        

        alert(tempTask.hint)
      }

     onDragEnd = (result, columns)  => {
  
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

    printC = () => {
      var modal = document.getElementById("modal");
      var close = document.getElementById("close-btn");
      modal.style.display = "block";

      close.onclick = () =>{
        modal.style.display = "none";
      }

    }
  render(){
    const concepts = [
      {task: 'If', index: 1}, 
      {task: 'Else', index: 2},
      {task: 'For-Loop', index: 3},
      {task: 'Create File', index: 5},
      {task: 'Create Method', index: 6},
      {task: 'Create Object', index: 7},
      {task: 'Create Array', index: 8},
      {task: 'Create Class', index: 9},
    ];

    var columns = this.state;


    return (
      
      <div className="app">
        <h1> Welcome to the COSC 236 Product Decomposition Tool !</h1>
        <div>
          {concepts.map((item, index) => {
          return(
            <button className="button" onClick={() => this.add(index)}>{item.task}</button>
            );
           })}
        </div>
        
          <div className="card-container">
            <div className="page-app">
            <div className="drag-context">
              <DragDropContext
                onDragEnd={(result) => this.onDragEnd(result, columns)}
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
                                            <div className="btn-content">
                                              {item.content}
                                              <input id={item.content} onBlur={() => this.changeHint(item.content)} type="text" className="user-input" name="uinput" placeholder={item.hint}/>
                                            </div> 
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
                  {this.state.unordered.items.map((item, index) => {
                    return(
                      <p> // {item.content} {item.hint}</p>
                    );
                  })}
                </div>
              </div>
            </div>
            <button id="btn" onClick={this.printC}>Print comments</button>
          </div>
          </div>           
      </div>
      
    );
  }
  
}

export default App;
