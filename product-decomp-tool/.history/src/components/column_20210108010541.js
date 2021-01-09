import React from 'react';
import './column.css';
import Card from './card.js';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import data from '../data/data-store';


class Column extends React.Component {
  
    render(){
        var state = data;
        
        return(
            <Droppable droppableId="droppable-1">
                {(provided) => (
                    <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        id="column"
                    > 
                       {state.map(({id, task}) => {
                            return( 
                                <Draggable draggableId={task} key={id} index={id}>
                                    {(provided) =>(
                                        <Card 
                                        innerRef={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        text={task}
                                        />
                                    )}
                                </Draggable>        
                            );
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        )
    }
}

export default Column; 