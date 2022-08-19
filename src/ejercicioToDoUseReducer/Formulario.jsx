import React from 'react';
import { actionAdd } from './actions';

const Formulario = ({createTodo}) => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        const [todo]=e.target;
        console.log(todo.value);
        createTodo({
          id: new Date().getTime(),
          title: todo.value,
          done: false
        })
    };

  return (
    <form onSubmit={handleSubmit} >
        <label>ToDo</label>
        <input type="text" />
        <button type='submit' >Add</button>
    </form>
  );
};

export default Formulario;