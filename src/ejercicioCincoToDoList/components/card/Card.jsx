import React from 'react';
import './card.scss';

export const Card = React.memo(({elements, deleteElement, handleComplete, handleEdit}) => {

    console.log('renderizando card')

  return (
    <>
        {
            elements.map((item)=>{
                return (
                    <div className='cardComp' key={item.id}>
                        <div className={`cardComp_containerPar ${item.complete ? 'tastk_isComplete' : ''}`}>
                            <p>{item.toDo}</p>
                        </div>
                        <div className="cardComp_containerBtns">
                            <button 
                                className={`cardComp_containerBtns-btn-complete
                                    ${item.complete ? '' : 'task_isPending'}`}
                                onClick={()=>handleComplete(item.id)}
                                disabled={item.complete ? true : false}
                                >
                                {
                                    item.complete 
                                    ? (<img src='/icons/icons8-de-acuerdo.svg' alt='Icon' />) 
                                    : 'Pending'
                                } </button>
                            <button 
                                className='cardComp_containerBtns-btn-edit'
                                onClick={()=>handleEdit(item)}
                                >
                                <img src='/icons/icons8-editar.svg' alt='Icon' />
                                Edit</button>
                            <button 
                                className='cardComp_containerBtns-btn-delete'
                                onClick={()=>deleteElement(item.id)}
                                >
                                <img src='/icons/icons8-basura.svg' alt='Icon' />
                                Delete</button>
                        </div>
                    </div>
                )
            })
        }
    </>
  );
});
