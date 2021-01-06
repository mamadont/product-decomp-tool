import React from 'react';
import './column.css';
import Card from './card.js';

class Column extends React.Component {
    render(){
        return(
            <div id="column"> 
                <div id="column-header">
                    <Card/>
                </div>
            </div>
        );
    }
}

export default Column; 