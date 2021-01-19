import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import './page-1.css';

const tasks = [
    { id: uuid(), content: "First task", week: 1 },
    { id: uuid(), content: "Second task", week: 2 },
    { id: uuid(), content: "Third task", week: 3 },
    { id: uuid(), content: "Fourth task", week: 4 },
    { id: uuid(), content: "Fifth task", week: 5 }
  ];

class Page1 extends React.Component {

}