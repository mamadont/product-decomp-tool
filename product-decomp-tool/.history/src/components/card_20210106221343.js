import React from 'react';
import './card.css'; 
import { Draggable } from 'react-beautiful-dnd';


class Card extends React.Component {
    

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
                       <p> {this.props.step} </p>
                   </div> 
                )}
                
            </Draggable>
            
        );
    }
}


export default Card;