import React, { useContext } from 'react';
import { setCharacterActionSignature } from '../actions/RickActions';
import { DispatchContext, GlobalContext } from '../context/contextInfo';

const Card = ({value, imgSrc, id, children}) => {

  // const dispatch=useContext(DispatchContext);
  const {dispatch}=useContext(GlobalContext);

  return (
    <div>
      {/* <button>Quit</button> */}
        <img src={imgSrc} alt={value} />
        <p>{value}</p>
        {dispatch && (
          <button
          onClick={()=>dispatch(setCharacterActionSignature(id))}
          >Selecionar</button>
          )}
        {children && (
          <footer>
            {children}
          </footer>
        )}
        {/* {children ? (<button>Quit</button>) : (<></>)} */}
    </div>
  );
};

export default Card;