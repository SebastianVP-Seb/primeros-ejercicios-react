import React from 'react';
import './editComponent.scss';

export const EditComponent = ({todoEditing, handleChange2, editingText, editTodo}) => {

  return (
    <form className='editComponent'>
      <h3 className='editComponent_title'>Update the todo</h3>
      <input 
        className='editComponent_input'
        value={editingText}
        onChange={handleChange2}
      />
      <button 
        onClick={()=>editTodo(todoEditing)} 
        type='button'
        className='editComponent_btn'
      >Update</button>
    </form>
  );
};
