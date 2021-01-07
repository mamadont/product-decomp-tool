import React from 'react';
import './card.css'; 
import { Draggable } from 'react-beautiful-dnd';
import data from '../data/data-store.js';


class Card extends React.Component {
     tasks = data; 

    render() {
        return (
            <Draggable draggableId="draggable-card" index={0}>
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