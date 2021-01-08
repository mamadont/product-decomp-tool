import React from 'react';
import './column.css';

class ColumnTwo extends React.Component {
    

    render(){
        return(
            <Droppable droppableId="droppable-2">
               <div id="column"> </div>  
            </Droppable>

             
        );
    }
}

export default ColumnTwo; 