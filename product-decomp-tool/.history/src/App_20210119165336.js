import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Page1 from './components/page-1';

class App extends React.Component {
  render(){

    const concepts = ["Selection", "For-Loops", "While-Loops", "Files", "Methods", "Objects", "Arrays", "Classes", "Recursion"];

    return (
      
      <div className="app">
        <h1> Welcome to the COSC236 Product Decomposition Tool!</h1>
        <h3> Please select a concept to get started: </h3>

        <Router> 
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/page1" component={Page1}/>
          </Switch>
          
          <div className="card-container">
              {concepts.map((item, index) => {
              return(
                  <div className="concept-card">
                    <a href="plan.cosc236.com/src/components/page-1"> <p>{item}</p> </a>   
                  </div>
                );
              })}
          </div>            
        </Router>

        
        
        
      </div>
      
    );
  }
  
}

export default App;
