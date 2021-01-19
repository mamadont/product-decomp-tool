import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Page1 from './components/page-1';

class App extends React.Component {
  render(){

    const concepts = ["Selection", "For-Loops", "While-Loops", "Files", "Methods", "Objects", "Arrays", "Classes", "Recursion"];

    return (
      
      <div className="app">
        <h1> Welcome to the COSC236 Product Decomposition Tool!</h1>
        <h3> Please select a concept to get started: </h3>

        <Router> 
          <div className="card-container">
              {concepts.map((item, index) => {
              return(
                  <div className="concept-card">
                    <p>{item}</p> 
                  </div>
                );
              })}
          </div>
        </Router>

        <Switch>
          <Route exact path="/"></Route>
          <Route path="./components/page-1.js"></Route>
        </Switch>
        
        
      </div>
      
    );
  }
  
}

export default App;
