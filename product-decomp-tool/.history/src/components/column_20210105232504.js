import React from 'react';
import './column.css';
import Card from './card.js';
import { DragDropContext, Droppable} from 'react-beautiful-dnd';


class Column extends React.Component {
    onDragEnd = result => {

    }
    render(){
        
        return(
            <DragDropContext 
            onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId="droppable-1">
                    {(provided) => (
                    <div 
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        id="column"
                    > 
                        <Card/> 
                        <Card/> 
                        <Card/>
                        {provided.placeholder}
                    </div>
                    )}
                    
                </Droppable>
             </DragDropContext>  
        );
    }
}

export default Column; 