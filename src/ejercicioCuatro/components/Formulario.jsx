import React from 'react';
import { INPUT_GENERIC } from '../db';

export default function Formulario() {

  const handleSubmit=(e)=>{
    e.preventDefault();
  };

  return (
    <div className='formulario'>
      <h2 className='formulario_title' >Agregar una imagen</h2>
      <form action="">
        {
          INPUT_GENERIC.map((item, index)=>{
            return (
              <div key={index} className='formulario_group' >
                <label className='formulario_group_label'>{item.text}</label>
                <input className='formulario_group_input' />
              </div>
            );
          })
        }
        <button className='formulario_btn' onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};
