import React from "react";
import './App.css';
import Page1 from './components/page-1';
import Page2 from './components/page-2';
import Page3 from './components/page-3';
import Page4 from './components/page-4';
import Page5 from './components/page-5';
import Page6 from './components/page-6';
import Page7 from './components/page-7';
import Page8 from './components/page-8';
import Page9 from './components/page-9';

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
