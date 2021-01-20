import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
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
      {task: 'Arrays', route: '/route7'},
      {task: 'Classes', route: '/route8'},
      {task: 'Recursion', route: '/route9'},
      ];

    return (
      
      <div className="app">
        <h1> Welcome to the COSC236 Product Decomposition Tool!</h1>
        <h3> Please select a concept to get started: </h3>

        <Router> 
          
          
          <div className="card-container">
              {concepts.map((item, index) => {
              return(
                <Link to={item.route}> <a className="concepts">{item.task}</a> </Link>   
                );
              })}
          </div>
          <div> 
            <Switch>
              <Route exact path="/" component={App}/>
              <Route path="/page1" component={Page1}/>
              <Route path="/page2" component={Page2}/>
              <Route path="/page3" component={Page3}/>
            </Switch> 
          </div>           
        </Router>

        
        
        
      </div>
      
    );
  }
  
}

export default App;
