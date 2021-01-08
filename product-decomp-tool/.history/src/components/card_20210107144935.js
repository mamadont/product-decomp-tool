import React from 'react';
import './card.css'; 
import { Draggable } from 'react-beautiful-dnd';


class Card extends React.Component {
    

    render() {
       
        return(
            
                
                   <div id="card-body">
                       <p> {this.props.step} </p>
                   </div> 
        )
         
            
        
    }
}


export default Card;