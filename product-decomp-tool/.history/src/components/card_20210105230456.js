import React from 'react';
import './card.css'; 
import {Draggable } from 'react-beautiful-dnd';


class Card extends React.Component {
    render() {
        return (
            <Draggable draggableId={1} index={1}>
                {(provided) => (
                   <div 
                   {...provided.draggableProps}
                   {...provided.dragHandleProps}
                   innerRef={provided.innerRef}
                   id="card-body"
                   >
                   </div> 
                )}
                
            </Draggable>
            
        );
    }
}


export default Card;