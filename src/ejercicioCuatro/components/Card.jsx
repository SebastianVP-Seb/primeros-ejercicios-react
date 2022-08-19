import React from 'react';

export default React.memo(function Card({item, deleteElement,handleLike}) {

  return (
    <div className='card'>
        <img src={`${item.urlImg}`} alt='imagen' className='card_img' />
        <p className='card_title'>{item.aurora}</p>
        <div className="card_btns">
          <button 
            className='card_btns_btn'
            onClick={()=>handleLike(item.id)}
          >{ item.like ? 'DISLIKE' : 'LIKE' } </button>
          <button 
            className='card_btns_btn'
            onClick={()=>deleteElement(item.id)} 
          >DELETE</button>
        </div>
    </div>
  );
});
