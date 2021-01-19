import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page1 from './components/page-1';

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
                    <Link to="/page1"> <p>{item}</p> </Link> 
                  </div>
                );
              })}
          </div>
          <Switch>
          <Route exact path="/"></Route>
          <Route path="/page1">
            <Page1/>
          </Route>
           </Switch>
        </Router>

        
        
        
      </div>
      
    );
  }
  
}

export default App;
