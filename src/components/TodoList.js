import React, { useState } from 'react';
import { initialTodos } from '../constants/index';

export default () => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
    </ul>
  );
};
