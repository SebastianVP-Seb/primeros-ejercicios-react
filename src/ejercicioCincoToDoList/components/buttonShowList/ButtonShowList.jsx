import React from 'react';
import './buttonShowList.scss';

export const ButtonShowList = ({ handleShowToDos, showList }) => {


  return (
    <div className="buttonShowList">
      <button
        onClick={handleShowToDos}
        className='buttonShowList_btn1'
      >
        {
          showList ? 'Hide toDo list' : 'Show toDo list'
        }
      </button>
    </div>
  );
};
