import React, { useState } from 'react';

import TodoItem from './TodoItem';
import { initialTodos } from '../constants/index';

export default () => {
  const [todos, setTodos] = useState(initialTodos);
  const [inputTodo, setInputTodo] = useState('');

  const handleNewTodo = () => {
    if (inputTodo !== '') {
      setTodos([...todos, { title: inputTodo, complete: false }]);
      setInputTodo('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleNewTodo();
    }
  };

  const completeTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <>
      <input
        value={inputTodo}
        onChange={(v) => setInputTodo(v.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='Enter a task'
      ></input>
      <button onClick={handleNewTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={todo.title}>
            {todo.title}
            <button onClick={() => completeTodo(i)}>Complete</button>
          </TodoItem>
        ))}
      </ul>
    </>
  );
};
