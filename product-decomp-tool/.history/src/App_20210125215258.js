import React from "react";
import './App.css';
import Page1 from './components/page-1';
import uuid from "uuid/v4";


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     'unordered': {
  //       name: "Unordered Tasks",
  //       items: tasks
  //     },
  //     'ordered': {
  //       name: "Ordered Tasks",
  //       items: []
  //     },
  //   };
  // }
  render(){

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
