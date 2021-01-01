const { ReactComponent } = require("*.svg");

import React from 'react';
import ReactDOM from 'react-dom';

class Card extends ReactComponent {
    render() {
        return (
            <div>
                <p> Step Number 1 </p>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Card />, app);