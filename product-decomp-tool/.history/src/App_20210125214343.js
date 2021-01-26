import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page1 from './components/page-1';
import Page2 from './components/page-2';
import Page3 from './components/page-3';
import Page4 from './components/page-4';
import Page5 from './components/page-5';
import Page6 from './components/page-6';
import Page7 from './components/page-7';
import Page8 from './components/page-8';
import Page9 from './components/page-9';
import { Button } from "@material-ui/core";

class App extends React.Component {
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
        {concepts.map((item, index) => {
          return(
            <Button>{item.task}</Button>
          );
        })}
          <div className="card-container">
              <Page1/>
          </div>           
      </div>
      
    );
  }
  
}

export default App;
