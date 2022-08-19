import React, { useContext } from 'react';
import { GlobalContext, LoadingContext } from '../context/contextInfo';

const Loading = ({children}) => {

  // const loading=useContext(LoadingContext);
  const {loading}=useContext(GlobalContext);

  return (
    <>
        {
            loading 
            ? (<h3>Loading...</h3>)
            : children
        }
    </>
  );
};

export default Loading;