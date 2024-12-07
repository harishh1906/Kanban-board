import React, { useState, useEffect } from 'react';
import './App.css';
import Column from './components/Column';
import SearchBar from './components/SearchBar';
import { DragDropContext } from '@hello-pangea/dnd';

function App() {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    peerReview: [],
    done: [],
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Load tasks from local storage on initial load
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handle task addition
  const addTask = (columnId, taskTitle, taskDescription) => {
    const newTask = { id: Date.now(), title: taskTitle, description: taskDescription };
    setTasks((prevTasks) => ({
      ...prevTasks,
      [columnId]: [...prevTasks[columnId], newTask],
    }));
  };

  // Handle task movement during drag-and-drop
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return; // if dropped outside a column

    const sourceColumn = source.droppableId;
    const destColumn = destination.droppableId;

    if (sourceColumn === destColumn) return;

    const draggedTask = tasks[sourceColumn].find((task) => task.id.toString() === draggableId);
    const updatedSourceColumn = tasks[sourceColumn].filter(
      (task) => task.id.toString() !== draggableId
    );
    const updatedDestColumn = [...tasks[destColumn], draggedTask];

    setTasks({
      ...tasks,
      [sourceColumn]: updatedSourceColumn,
      [destColumn]: updatedDestColumn,
    });
  };

  // Filter tasks based on the search query
  const filteredTasks = (columnId) => {
    return tasks[columnId].filter((task) => 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns-container">
          <Column id="todo" title="To Do" tasks={filteredTasks('todo')} addTask={addTask} />
          <Column id="inProgress" title="In Progress" tasks={filteredTasks('inProgress')} addTask={addTask} />
          <Column id="peerReview" title="Peer Review" tasks={filteredTasks('peerReview')} addTask={addTask} />
          <Column id="done" title="Done" tasks={filteredTasks('done')} addTask={addTask} />
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
