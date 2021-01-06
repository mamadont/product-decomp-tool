import React from 'react';
import './card.css'; 
import { Draggable } from 'react-beautiful-dnd';
import tasks from '../data/data-store.js';


class Card extends React.Component {
    

    render() {
        return (
            <Draggable draggableId="draggable-card" index={tasks.map(task => {task.id})}>
                {provided => (
                   <div 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    id="card-body"
                   >

                   </div> 
                )}
                
            </Draggable>
            
        );
    }
}


export default Card;