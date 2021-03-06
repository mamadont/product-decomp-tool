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
        items: tasks,
        
      },
    };
  }

   componentDidMount(){
    var modal = document.getElementById("info-modal");
    // if (document.cookie != null){
    //   modal.style.display = "none";
    // }
   }

    handleSubmit = () => {
      
      // Initialize variables
      var modal = document.getElementById("info-modal");
      var name = document.getElementById("username").value;
      var section = document.getElementById("section").value;
      

      // store data in a cookie 
      document.cookie = "name= " + name + "course = cosc236" + section;
      modal.style.display = "none";
    }

    changeHint = (id) => {
      var hint = document.getElementById(id).value;
      // loop through the tasks array use the uuid to find the unique card
      tasks.forEach((element) => {
        if (element.id === id){
          // change the hint property to the test in the input value
          element.hint = hint;
        }
      })

      
    }

    // Generates card based on index
    add = (index) => { 
        switch(index){
          case 0: 
            tasks.push({id: uuid(), content: "If", hint: "Condition"});
          break;

          case 1: 
            tasks.push({id: uuid(), content: "Else", hint: " "});
          break;

          case 2: 
            tasks.push({id: uuid(), content: "Begin Loop",  hint:"Loop Condition"});
            tasks.push({id: uuid(), content: "End Loop", hint: " "});
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
            tasks.push({id: uuid(), content: "Initialize array", hint: " "});
          break;

          case 7: 
            tasks.push({id: uuid(), content: "Create variable", hint: " "});
          break;

          case 8: 
            tasks.push({id: uuid(), content: " "});
            break;
  
          default:
            console.log("Invalid index");
        }
        
        this.setState({
          unordered: {
            items: tasks
          }
        });
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
      // grab elements
      var modal = document.getElementById("modal");
      var close = document.getElementById("close-btn");
      modal.style.display = "block";

      // load comments
      this.state.unordered.items.forEach((task) => {
        var tag = document.createElement("p");
        var text = document.createTextNode("// " + task.content + " " + task.hint);
        tag.appendChild(text);
        var element = document.getElementById("comments");
        element.appendChild(tag);
      });

      close.onclick = () =>{
        modal.style.display = "none";
        var x = document.getElementById('comments');
        x.innerHTML = "";

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
      {task: 'Create Variable', index: 9},
      {task: 'Blank Card', index: 9},
    ];

    var columns = this.state;
    var student = document.cookie.replace("name=", " ").replace("course =", " ").split(" ");
    var studentName = student[1];
    var courseSection = student[3];


    return (
      <div className="app">
        <h1> Welcome to the COSC 236 Product Decomposition Tool !</h1>
        <div className="main-container">

           {/* main menu buttons and welcome message */}
            <div className="concept-btns">
              {concepts.map((item, index) => {
              return(
                <button className="button" onClick={() => this.add(index)}>{item.task}</button>
                );
              })}
            </div>
              
            {/* card container, the cards, the button, and the header */}
            <div className="main">
              {/* header */}
              <h2 className="headers">Unordered Steps</h2>
              {/* card container */}
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
                                                    <input id={item.id} onBlur={() => this.changeHint(item.id)} type="text" className="user-input" name="uinput" placeholder={item.hint}/>
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
                      
                    {/* Comments modal   */}
                    <div id="modal">
                      <div className="modal-content">
                        <span id="close-btn" className="close">&times;</span>
                        <h3>// {studentName}</h3>
                        <h3>// {courseSection}</h3>
                        <h3> Copy comments below </h3>
                        <div id="comments"></div>
                      </div>
                    </div>

                    {/* User info modal */}
                      <div id="info-modal">
                        <div className="modal-content">
                          <form id="info-form" onSubmit={this.handleSubmit}>
                              <label>Name: </label>
                              <input id="username" placeholder="name" type="text" required></input>

                              <label>Class section: </label>
                              <input id="section" placeholder="section" type="text" required></input>

                              <button type="submit"> Submit</button>
                          </form>
                        </div>
                     </div>
                  </div>
                  <button id="btn" onClick={this.printC}>Print comments</button>
          </div>
          </div> 
        </div>
        </div>
        
                  
      </div>
      
    );
  }
  
}

export default App;
