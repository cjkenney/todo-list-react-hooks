import React from 'react';

export default (props) => {
  return (
    <li
      style={
        props.complete
          ? { textDecoration: 'line-through' }
          : { textDecoration: '' }
      }
    >
      {props.children}
    </li>
  );
};
