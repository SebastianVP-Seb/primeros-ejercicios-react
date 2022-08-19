import React from 'react';

const TodoItem = ({id, title, done, handleDelete}) => {
  return (
    <li>
        <label htmlFor={title}>{title}</label>
        <input type='checkbox' name={id} checked={done} />
        <button onClick={()=>handleDelete(id)} >Delete</button>
    </li>
  );
};

export default TodoItem;