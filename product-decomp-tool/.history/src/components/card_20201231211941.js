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

const app = document.getElementById('appsf');
ReactDOM.render(<Card />, app); 