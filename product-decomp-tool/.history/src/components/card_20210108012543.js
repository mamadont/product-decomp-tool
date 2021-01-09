import React from 'react';
import './card.css'; 


class Card extends React.Component {
    

    render() {
       
        return(
            <div {...this.props} ref={this.props.innerRef} id="card-body">
                <p id="text"> {this.props.text} </p>
            </div> 
        )
        
    }
}


export default Card;