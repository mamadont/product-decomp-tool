import React from "react";
import './App.css';
class App extends React.Component {
  render(){

    const concepts = ["Selection", "For-Loops", "While-Loops", "Files", "Methods", "Objects", "Arrays", "Classes", "Recursion"];

    return (
      
      <div className="app">
        <h1> Welcome to the COSC236 Product Decomposition Tool!</h1>
        <h3> Please select a concept to get started: </h3>
        
      </div>
      
    );
  }
  
}

export default App;
