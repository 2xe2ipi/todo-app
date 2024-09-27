import React from 'react';

const CompletedTasks = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="completed-tasks">
      <h2>Completed Tasks</h2>
      <ul>
        {completedTodos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;