// TodoList.js

import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos, completeTodo, moveTodoToCompleted }) => {
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const updateTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const undoComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = false;
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
          placeholder="Add new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.length === 0 ? (
          <p>No todos available. Add a todo to get started!</p>
        ) : (
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              completeTodo={completeTodo}
              undoComplete={undoComplete}
              moveTodoToCompleted={moveTodoToCompleted}
              updateTodo={updateTodo}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;