import React from 'react';
import './Task.css';
import { Draggable } from '@hello-pangea/dnd';

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3>{task.title}</h3>
          <p>{task.description.length > 50 ? `${task.description.substring(0, 50)}...` : task.description}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
