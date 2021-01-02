import './App.css';
import Card from './components/card';
import Column from './components/column';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div id="app">
      <h1> Problem Decomposition Tool </h1>
      <div id="tool-container"> 
          <Column></Column>
          <Column></Column>
      
        
      </div>
    </div>
  );
}

export default App;
