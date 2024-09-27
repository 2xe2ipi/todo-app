// App.js

import React, { useState } from 'react';
import TodoList from './TodoList';
import CompletedTasks from './CompletedTasks';
import DateTime from './DateTime';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Task 1', completed: false },
    { text: 'Task 2', completed: false },
    { text: 'Task 3', completed: false },
  ]);

  const [completedTasks, setCompletedTasks] = useState([]);

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const moveTodoToCompleted = (index) => {
    const newTodos = [...todos];
    const completedTask = newTodos.splice(index, 1)[0];
    setTodos(newTodos);
    setCompletedTasks([...completedTasks, completedTask]);
  };

  return (
    <div className="app">
      <div className="left-panel">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completeTodo={completeTodo}
          moveTodoToCompleted={moveTodoToCompleted}
        />
      </div>
      <div className="right-panel">
        <DateTime />
        <CompletedTasks todos={completedTasks} />
      </div>
    </div>
  );
};

export default App;