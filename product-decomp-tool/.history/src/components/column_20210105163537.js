import React from 'react';
import './column.css';
import Card from './card.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


class Column extends React.Component {
    render(){
        return(
            <div>
                <DragDropContext>
                    <Droppable>
                       <div id="column"> 
                            <Draggable>
                               <Card/> 
                            </Draggable>
                        </div>  
                    </Droppable>   
                </DragDropContext>
            </div>
            
        );
    }
}

export default Column; 