import React from 'react';
import './column.css';

class ColumnTwo extends React.Component {
    data = [
        {id: '0', task: 'Step 1'},
        {id: '1', task: 'Step 2'},
        {id: '2', task: 'Step 3'}
    ];

    render(){
        return(
            <div id="column"> 
                {data.map(({id, task}) => {
                    return(
                        <p> {task} </p>
                    );
                })

                }
            </div>  
        );
    }
}

export default ColumnTwo; 