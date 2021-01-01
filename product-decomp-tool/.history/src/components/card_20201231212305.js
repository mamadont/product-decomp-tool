import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
    render() {
        return (
            <div>
                <p> Step Number 1 </p>
            </div>
        );
    }
}

const app = document.getElementsByClassName('App');
ReactDOM.render(<Card />, app); 