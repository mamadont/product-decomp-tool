import React from 'react';
import './column.css';
import Card from './card.js';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import data from '../data/data-store';


class Column extends React.Component {
    drag(){
        const draggable = document.querySelectorAll('#card');
        const container = document.querySelectorAll('#column');

        draggable.addEventListener('dragstart', () => {
            console.log("Dragged");
        })
    }
  
    render(){
        var state = data;
        
        return(
            <div id="column">
                {state.map(({id, task}) =>{
                    return(
                        <Card onDrag={this.drag} id="#card" step={task} draggable="true"/>
                    );
                })}
            </div>
        )
    }
}

export default Column; 