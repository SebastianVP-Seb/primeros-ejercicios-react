import React, { useContext, useMemo } from 'react';
// import { decrementPageActionSignature, incrementPageActionSignature } from '../actions/RickActions';
import { changePageActionSignature } from '../actions/RickActions';
import { DispatchContext, GlobalContext, RickContext } from '../context/contextInfo';

const ButtonsRick = () => {

  // const {page}=useContext(RickContext);
  // const dispatch=useContext(DispatchContext);

  const {dispatch, state: {page}}=useContext(GlobalContext);

  const prevPage=useMemo(()=>page-1, [page]);
  const nextPage=useMemo(()=>page+1, [page]);

  return (
    <div>
        {/* <button onClick={()=>dispatch(decrementPageActionSignature())}>Prev Page</button>
        <button onClick={()=>dispatch(incrementPageActionSignature())}>Next Page</button> */}
        {
          prevPage !==0 && (
            <button onClick={()=>dispatch(changePageActionSignature(prevPage))}>Prev Page {prevPage}</button>
          )
        }
        <p>{page}</p>
        <button onClick={()=>dispatch(changePageActionSignature(nextPage))}>Next Page {nextPage}</button>
    </div>
  );
};

export default ButtonsRick;