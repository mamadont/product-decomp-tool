import './App.css';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';

const tasks = [
  {id: 0, task: 'Step 1'},
  {id: 0, task: 'Step 1'},
]
const col = [
  {
    [uuid()]: {
      name: 'Unordered Tasks',
      items: [tasks]

    }
  }
];

function App() {
  const [columns, setCol] = useState(col);
    return(
      <div id="app">
        <DragDropContext onDragEnd={ result => console.log(result)}>
          {Object.entries(columns).map((id, column) =>{
            return(
              <Droppable droppableId={id}>
                {(provided, snapshot) => {
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver ? 'green' : 'black',
                      padding: 4,
                      width: 250,
                      minHeight: 500
                    }}
                  >
                  </div>
                }}

              </Droppable>
            );
          })}
        </DragDropContext>
      </div>
    )
  
}
  export default App;