import React from 'react';
import './card.css'; 
import { Draggable } from 'react-beautiful-dnd';


class Card extends React.Component {
    data = [
        {id: '0', task: 'Step 1'},
        {id: '1', task: 'Step 2'},
        {id: '2', task: 'Step 3'}
    ];

    render() {
        return(
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