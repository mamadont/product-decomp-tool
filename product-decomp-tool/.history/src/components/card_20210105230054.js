import React from 'react';
import './card.css'; 
import {Draggable } from 'react-beautiful-dnd';


class Card extends React.Component {
    render() {
        return (
            <Draggable>
                <div id="card-body"></div>
            </Draggable>
            
        );
    }
}


export default Card;