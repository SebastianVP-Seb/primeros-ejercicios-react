import React, { useRef } from 'react';
import { ColorContext } from '../context/color';

const HeaderComp = () => {

  const color=useRef(ColorContext);

  return (
    <div style={{backgroundColor: color}} >HeaderComp</div>
  );
};

export default HeaderComp;