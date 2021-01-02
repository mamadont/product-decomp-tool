import './App.css';
import Card from './components/card';
import Column from './components/column';
import { Grid, Row, Col } from 'react-flexbox-grid';

function App() {
  return (
    <div id="app">
      <h1> Problem Decomposition Tool </h1>
      <div id="tool-container"> 
        <Column>
         
        </Column>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
