import React from 'react';
import './column.css';
import Card from './card.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


class Column extends React.Component {
    render(){
        this.onDragEnd = result => {

        }
        return(
            <DragDropContext>
                <Droppable droppableId=>
                    <div id="column"> 
                        <Card/> 
                        <Card/> 
                        <Card/>
                    </div>
                </Droppable>
             </DragDropContext>  
        );
    }
}

export default Column; 