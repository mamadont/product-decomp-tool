import React from 'react';
import './column.css';
import Card from './card.js';
import { Droppable } from 'react-beautiful-dnd';


class Column extends React.Component {
    render(){
        return(
            <Droppable droppableId="droppable-1">
                {(provided) => (
                <div 
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    id="column"
                > 
                    <Card/> 
                    <Card/> 
                    <Card/>
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
        );
    }
}

export default Column; 