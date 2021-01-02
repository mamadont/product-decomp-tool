import './App.css';
import Card from './components/card';
import Column from './components/column';
import { Grid, Row, Col } from 'react-flexbox-grid';

function App() {
  return (
    <div id="app">
      <h1> Problem Decomposition Tool </h1>
      <div id="tool-container"> 
        <Grid fluid>
            <Row>
              <Col xs={6} md={3}>
                <Column/>
              </Col>
              <Col>
                <Column/>
              </Col>
            </Row>
        </Grid>
      </div>
    </div>
  );
}

export default App;
