import React, { useCallback, useState } from 'react';
import './useForm.scss';

export const useForm = (formInit={}) => {

    //form se refiere a los inputs que generará dinámicamente
    const [form, setForm]=useState(formInit);

    const resetForm=()=>{//recibe el formulario
        setForm(formInit);
    };

    const createForm=useCallback((handleSubmit=()=>{})=>{

        //Para computar los valores
        const handleInputChange=({target})=>{
            const {value, name}=target;
            setForm(prevState=>({...prevState,[name] : {...prevState[name], value}}));
        };

        return (
            <form onSubmit={handleSubmit} className='useForm'>
            <h2 className='useForm_title' >ToDo List</h2>
                {Object.keys(form).map((item)=>{
                    //de c/item (input) extrae sus características
                    const { name, value, type, placeholder} = form[item];
                    return (
                        <div className='useForm_containerForm' key={name}>
                            <input 
                                placeholder={placeholder}
                                name={name}
                                value={value} 
                                type={type}
                                onChange={handleInputChange}
                                className='useForm_containerForm_input' 
                                autoComplete='off'
                            />
                        </div>
                    );
                })}
                <button className='useForm_btnSubmit' type='submit'>Add</button>
            </form>
        );
    }, [form]);
  return { createForm, resetForm };
};
