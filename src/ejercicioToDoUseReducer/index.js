import React, { useReducer, useState } from 'react';
import { actionAdd, actionDelete } from './actions';
import Formulario from './Formulario';
import reducer from './reducer';
import './style.scss';
import TodoItem from './TodoItem';

const EjercicioToDoUseReducer = () => {

  const initialState=[
    {
      id: new Date().getTime(),
      title: 'Do the dishes',
      done: false
    }
  ];

  const [state, dispatch]=useReducer(reducer, initialState);

  // Para que el estado se renderice una vez y no tres veces 
  useState(()=>{
    console.log(state);
    localStorage.setItem('todos', state);
  },[state]);
  
  localStorage.getItem('todos');

  const existeTodo=(todo)=>{
    if(state.filter((item)=>item.title===todo.title).length >0) {
      alert('This task already exists');
    } else {
      dispatch(actionAdd(todo));
    };
  };

  const handleDelete=(id)=>{
    console.log(`El id es: ${id}`);
    console.log(actionDelete(id))
    dispatch(actionDelete(id))
  };

  return (
    <div className='ejercicioUseReducer'>
      <Formulario createTodo={existeTodo} />
      <ol>
        {
          state.map((item)=>
            <TodoItem 
              id={item.id}
              title={item.title}
              done={item.done}
              handleDelete={handleDelete}
              />
          )
        }
      </ol>
    </div>
  );
};

export default EjercicioToDoUseReducer;