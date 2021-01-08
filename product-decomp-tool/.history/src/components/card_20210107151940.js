import React from 'react';
import './card.css'; 


class Card extends React.Component {
    

    render() {
       
        return(
            <div {...this.props} ref={this.props.innerRef} id="card-body">
                <p> {this.props.step} </p>
            </div> 
        )
        
    }
}


export default Card;