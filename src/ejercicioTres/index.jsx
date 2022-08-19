import React, { useEffect, useState } from 'react';
import { IMG_SELECT } from './db';

const titleDefault='React App';
const imageDefault='Selecciona un país'

export default function EjercicioTres() {

  const [active, setActive]=useState(false);
  const [title, setTitle]=useState(titleDefault);
  const [image, setImage]=useState(imageDefault);

  useEffect(()=>{
    document.title=title;
    // return (()=>{
      // document.title=title;
    // });
  },[title]);

  const handleComponent=()=>{
    setActive(prevState=>!prevState);
  };

  const handleChange=(e)=>{
    setTitle(e.target.value);
    setImage(e.target.value);
  };

  return (
    <div className='ejercicio3'>
        Elige un elemento de la lista
        <select onChange={handleChange} >
          {
            IMG_SELECT.map((item,index)=>(<option key={index} value={item.title} >{item.title}</option>))
          }
        </select>

        <button 
          onClick={handleComponent}
          disabled={image===imageDefault ? true : false}
        >
          {active ? 'Hide component' : 'Show component'}</button>
          {
            !active || image===imageDefault 
            ? <></>
            : 
            <div className='ejercicio3'>
                <h2>Esta Aurora Boreal es de {title}</h2>
                <img src={`/imagenes/${image}.jpg`} alt="imagen" width={800} height={450} />
            </div> 
          }
    </div>
  );
};
