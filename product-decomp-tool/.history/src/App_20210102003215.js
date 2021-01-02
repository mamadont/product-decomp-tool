import './App.css';
import Card from './components/card';
import Column from './components/column';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div id="app">
      <h1> Problem Decomposition Tool </h1>
        <div id="tool-container"> 
            <Grid container direction="row" justify="center" alignItems="center" spacing="10" >
              <Grid item xs={4}>
                <Column></Column>
              </Grid>
              <Grid item item xs={4}>
                <Column></Column>
              </Grid>
            </Grid>
        </div>
    </div>
  );
}

export default App;
