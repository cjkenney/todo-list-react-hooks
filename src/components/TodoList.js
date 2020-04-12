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

  const completeTodo = (title) => {
    setTodos(
      [...todos].map((todo) => {
        if (todo.title === title) {
          return {
            ...todo,
            complete: true,
          };
        } else return todo;
      })
    );
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
          <TodoItem complete={todo.complete} key={todo.title}>
            {todo.title}
            {!todo.complete && (
              <button onClick={() => completeTodo(todo.title)}>Complete</button>
            )}
          </TodoItem>
        ))}
      </ul>
    </>
  );
};
