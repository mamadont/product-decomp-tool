import React from 'react';
import './column.css';
import Card from './card.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


class Column extends React.Component {
    render(){
        return(
            <div>
                
            </div>
            <div id="column"> 
                    <Card/>
            </div>
        );
    }
}

export default Column; 