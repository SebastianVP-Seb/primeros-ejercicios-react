import React, { useEffect, useState } from 'react';

export default function EjercicioUno() {

  const [inputColor, setInputColor]=useState('00000');
  const [imagenColor, setImagenColor]=useState('00000');

  useEffect(()=>{
    const color=inputColor.slice(1,7);
    setImagenColor(color)

  },[inputColor]);

  const handleChange1=(e)=>{
    setInputColor(e.target.value);
    setImagenColor(e.target.value);
  };

  return (
    <div className='ejercicioUno'>
      <h3>Selecciona un color</h3>
      <input type='color' value={inputColor} onChange={handleChange1} />
      <img src={`https://via.placeholder.com//300/${imagenColor}`} alt="Imagen colores" />
    </div>
  );
};
