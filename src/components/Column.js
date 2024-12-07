import React, { useState } from 'react';
import Task from './Task';
import './Column.css';
import {Droppable} from '@hello-pangea/dnd';

const Column = ({ id, title, tasks, addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskTitle && taskDescription) {
      addTask(id, taskTitle, taskDescription);
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  return (
    <div className="column">
      <h2>{title}</h2>
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {id === 'todo' && (
        <div className="add-task">
          <input
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      )}
    </div>
  );
};

export default Column;
