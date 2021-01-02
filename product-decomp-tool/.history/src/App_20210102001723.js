import './App.css';
import Card from './components/card';
import Column from './components/column';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div id="app">
      <h1> Problem Decomposition Tool </h1>
      <Grid container spacing={3}>
        <div id="tool-container"> 
          
            <Grid item xs={6}>
              <Column></Column>
            </Grid>
            <Grid item xs={6}>
              <Column></Column>
            </Grid>
            
          
          
        </div>
      </Grid>
    </div>
  );
}

export default App;
