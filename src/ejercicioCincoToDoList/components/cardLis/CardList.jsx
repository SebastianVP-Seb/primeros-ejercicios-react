import React from 'react';
import { Card } from '../card/Card';


export const CardList = React.memo(({
  elements, 
  deleteElement, 
  handleComplete, 
  handleEdit, 
  editTodo, 
  setTodoEditing
}) => {

  console.log('renderizando CardList');

  return (
    <div>
        <Card 
          elements={elements} 
          deleteElement={deleteElement} 
          handleComplete={handleComplete}
          // handleEdit={handleEdit}
          // editTodo={editTodo}
          // setTodoEditing={setTodoEditing}
        />
    </div>
  );
});
