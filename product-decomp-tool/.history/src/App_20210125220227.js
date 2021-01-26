import React from "react";
import './App.css';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './components/page-1.css';
import Page1 from './components/page-1';
import uuid from "uuid/v4";

const tasks = [
  { id: uuid(), content: "If conditions are satisfied, go to if block"},
  { id: uuid(), content: "If conditions are not satisfied go to else block" },
  { id: uuid(), content: "Check conditions"},
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
    }

    var printC = () => {
      var modal = document.getElementById("modal");
      var close = document.getElementById("close-btn");
      modal.style.display = "block";

      close.onclick = () =>{
        modal.style.display = "none";
      }

    }

    const concepts = [
      {task: 'If'}, 
      {task: 'Else'},
      {task: 'For-Loop'},
      {task: 'While-Loop'},
      {task: 'Create File'},
      {task: 'Create Method'},
      {task: 'Create Object'},
      {task: 'Create Array'},
      {task: 'Create Class'},
      {task: 'Recursion'},
    ];

    var columns = this.state;



    return (
      
      <div className="app">
        <h1> Welcome to the COSC 236 Product Decomposition Tool !</h1>
        <div>
          {concepts.map((item, index) => {
          return(
            <button>{item.task}</button>
            );
           })}
        </div>
        
          <div className="card-container">
              <Page1/>
          </div>           
      </div>
      
    );
  }
  
}

export default App;
