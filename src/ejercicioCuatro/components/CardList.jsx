import React from 'react';
import Card from './Card';

export default React.memo(function CardList({
  elements, deleteElement, handleLike}) {

  return (
    <>
      {
        !elements ? (<Spinner />) : (
          <div className='cardList'>
            <p className='cardList_parrafo'>Lista de imágenes: </p>
            <div className='cardList_list'>
              {
                elements.map((item)=>
                <Card 
                  key={item.id} 
                  item={item} 
                  deleteElement={deleteElement} 
                  handleLike={handleLike}
                />)
              }
            </div>
          </div>
        )
      }
    </>
  );
});

const Spinner=()=>{
  return (
    <div>
      Spinner
    </div>
  )
}
