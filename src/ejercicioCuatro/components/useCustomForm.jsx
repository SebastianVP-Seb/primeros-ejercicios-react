import React, { useState } from 'react';
//Genera un formulario dinámicamente

export const useCustomForm = (formInit={}) => {

    const [form, setForm]=useState(formInit);

    //Función que renderiza el formulario
    //Se manda la estructura de una función para que no marque error
    const createForm=(handleSubmit=()=>{})=>{

        //Para computar los valores
        const handleInputChange=({target})=>{
            const {value, name}=target;
            setForm(prevState=>({...prevState,[name] : {...prevState[name], value}}));
            // console.log(form); 
            // console.log(prevState);
        };

        console.log('renderizando')

        return (
            <form onSubmit={handleSubmit} className='formulario'>
            <h2 className='formulario_title' >Agregar una imagen</h2>
                {/* Se obtienen los elementos de form  */}
                {Object.keys(form).map((item)=>{
                    const {label, name, value, type} = form[item];
                    return (
                        <div className='formulario_group' key={name}>
                            <label htmlFor={name} className='formulario_group_label'>{label}</label>
                            <input 
                            name={name}
                            value={value} 
                            type={type}
                            onChange={handleInputChange}
                            className='formulario_group_input' 
                            autoComplete='off'
                            />
                        </div>
                    );
                })}
                <button className='formulario_btn' type='submit'>Enviar</button>
            </form>
        );
    };

  return {
      createForm, form
  };
};
