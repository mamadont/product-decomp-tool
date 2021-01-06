import React from 'react';
import './column.css';
import Card from './card.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


class Column extends React.Component {
    render(){
        onDragEnd = result => {
            
        }
        return(
            <DragDropContext>
                <div id="column"> 
                    <Card/> 
                </div>
             </DragDropContext>  
        );
    }
}

export default Column; 