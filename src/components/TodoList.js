import React, { useState } from 'react';
import { initialTodos } from '../constants/index';

export default () => {
  const [todos, setTodos] = useState(initialTodos);
  const [inputTodo, setInputTodo] = useState('');

  return (
    <>
      <input
        value={inputTodo}
        onChange={v => setInputTodo(v.target.value)}
        placeholder='Enter A Task'
      ></input>
      <button onClick={() => setTodos([...todos, inputTodo])}>Add Task</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
};
