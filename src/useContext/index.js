import React from 'react';
import ContainerComp from './components/ContainerComp';
import HeaderComp from './components/HeaderComp';
import { ColorContext } from './context/color';
// import './style.scss';

const UseContextHook = () => {

  const colorSelect='black';




  return (
    <ColorContext.Provider value={colorSelect}>
        <HeaderComp />
        <ContainerComp />
    </ColorContext.Provider>
  );
};

export default UseContextHook;