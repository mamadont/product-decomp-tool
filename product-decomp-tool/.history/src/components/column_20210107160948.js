import React from 'react';
import './column.css';
import Card from './card.js';
import { Droppable, Draggable } from 'react-beautiful-dnd';


class Column extends React.Component {
    render(){
        const data = [
            {id: 0, task: 'Step 1'},
            {id: 1, task: 'Step 2'},
            {id: 2, task: 'Step 3'}
        ];
        
        return(
            <Droppable droppableId="droppable-1">
                {(provided) => (
                    <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        id="column"
                    > 
                       {data.map(({id, task}, index) => {
                            return( 
                                <Draggable draggableId="draggable-card" key={id} index={index}>
                                    {(provided) =>(
                                        <Card 
                                        innerRef={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        step={task}/>
                                    )}
                                    
                                </Draggable>        
                                  
                            );
                        })}
                        
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );
    }
}

export default Column; 