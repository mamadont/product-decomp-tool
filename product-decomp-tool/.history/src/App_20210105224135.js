import './App.css';
import Column from './components/column';
import ColumnTwo from './components/columnTwo';
import Grid from '@material-ui/core/Grid';


function App() {
  onDragEnd = result => {

  }
  
  return (
    <div id="app">
      <h1> Problem Decomposition Tool </h1>
        <div id="tool-container"> 
            <Grid container direction="row" justify="center" alignItems="center" spacing="10" >
              <Grid item xs={4}>
                <Column></Column>
              </Grid>
              <Grid item item xs={4}>
                <ColumnTwo></ColumnTwo>
              </Grid>
            </Grid>
        </div>
    </div>
  );
}

export default App;