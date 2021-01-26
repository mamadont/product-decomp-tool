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

class App extends React.Component {
  render(){

    const concepts = [
      {task: 'Selection', route: '/page1'}, 
      {task: 'For-Loops', route: '/page2'},
      {task: 'While-Loops', route: '/page3'},
      {task: 'Files', route: '/page4'},
      {task: 'Methods', route: '/page5'},
      {task: 'Objects', route: '/page6'},
      {task: 'Arrays', route: '/page7'},
      {task: 'Classes', route: '/page8'},
      {task: 'Recursion', route: '/page9'},
    ];

    return (
      
      <div className="app">
        <h1> Welcome to the COSC 236 Product Decomposition Tool !</h1>
          <div className="card-container">
              <Page1/>
          </div>           
      </div>
      
    );
  }
  
}

export default App;
