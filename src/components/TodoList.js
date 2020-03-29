import React, { useState } from 'react';
import { initialTodos } from '../constants/index';

export default () => {
  const [todos, setTodos] = useState(initialTodos);
  const [inputTodo, setInputTodo] = useState('');

  const handleNewTodo = () => {
    if (inputTodo !== '') {
      setTodos([...todos, inputTodo]);
      setInputTodo('');
    }
  };

  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      handleNewTodo();
    }
  };

  return (
    <>
      <input
        value={inputTodo}
        onChange={v => setInputTodo(v.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='Enter A Task'
      ></input>
      <button onClick={handleNewTodo}>Add Task</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
};
