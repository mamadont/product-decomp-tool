import React from 'react';
import './column.css';
import Card from './card.js';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import data from '../data/data-store';


class Column extends React.Component {
    render(){
        var state = data;
        
        return(
            <div id="column">
                {state.map(({id, task}) =>{
                    return(
                        <Card step={task}/>
                    );
                })}
            </div>
        )
    
    }
}

export default Column; 