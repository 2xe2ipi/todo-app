// TodoItem.js

import React, { useState } from 'react';

const TodoItem = ({ todo, index, completeTodo, undoComplete, moveTodoToCompleted, updateTodo }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    updateTodo(index, newText);
    setEditing(false);
  };

  return (
    <li className={`todo-item ${editing ? 'edit-mode' : ''}`}>
      {editing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#bbb' : '#333',
          }}
        >
          {todo.text}
        </span>
      )}
      {editing ? (
        <button onClick={handleSave} className="save-btn">Save</button>
      ) : (
        <div>
          {todo.completed ? (
            <div>
              <button onClick={() => undoComplete(index)} className="undo-complete-btn">
                Undo Complete
              </button>
              <button onClick={() => moveTodoToCompleted(index)} className="move-to-completed-btn">
                Move to Completed
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => completeTodo(index)} className="complete-btn">
                Complete
              </button>
              <button onClick={() => setEditing(true)} className="edit-btn">
                Edit
              </button>
              <button onClick={() => moveTodoToCompleted(index)} className="move-to-completed-btn">
                Remove
              </button>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default TodoItem;