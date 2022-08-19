import React, { useCallback, useMemo, useState } from 'react';
// import Formulario from './components/Formulario';
import Likes from './components/Likes';
import CardList from './components/CardList';
import { useCustomForm } from './components/useCustomForm';
import { FORM_LAYOUT } from './utils';
import { IMG_LIST } from './dbImg';
import { v4 as uuidv4 } from 'uuid';

export default function EjercicioCuatro() {

  //Arreglo para agregar un nuevo elemento al Obj default
  const [elements, setElements]=useState(IMG_LIST);
  //se extrae lo que regresa el custom hook y recibe los datos para trabajar
  const {createForm}=useCustomForm(FORM_LAYOUT);

  //Para los likes:
  const likes=useMemo(()=> elements.filter(item=>item.like).length,[elements]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(e);
    //Se computa para tener un código dinámico, que no se dependa del orden de los miniObjs del obj por default
    //muestra la propiedad target, donde en forma de arreglo , se observan
    //los dos inputs y el btn señalando sus posiciones ([0]...[2])
    //ósea, los campos que contiene el formulario (<form)
    //y da el valor... extrayéndolo:
    // const value=e.target[0].value;
    // console.log(value);//valor de lo que se pone en el input
    // const keys=Object.keys(FORM_LAYOUT);
    // console.log(keys);//regresa las llaves del obj ya en un arreglo
    let newElement={};//para crear un nuevo elemento
    Object.keys(FORM_LAYOUT).forEach((item)=>{
      //del target se extrae el value, en f se los items que se tenga en el Obj
      // const {value}=e.target[item];
      // console.log(value);//valores de los inputs
      //el value cambiará los valores de title y urlImage, en la
      //1er vuelta se ejecuta title y luego urlImg
      //[target[item].name]: target[item].value, setea los valores con
      //sus respectivos valores
      newElement={
        ...newElement,//trayendo lo que se tiene
        id: uuidv4(),
        like: false,
        [e.target[item].name]: e.target[item].value,
      };
      // console.log(newElement);//nuevo elemento creado
      setElements([...elements, newElement]);
      console.log(elements);
    })
  };

  //El resultado es similar si se pone "elements" dentro del arreglo de dependencias, o
  //si no se pone. Funciona:
  // const deleteElement=useCallback((id)=>{
  //   setElements(elements.filter((item)=>item.id!==id));
  // },[elements]);
  //Tratar de que useCallBack no dependa de otras vars, en este caso
  //elementos ya se está modificando en el set, por lo que no es
  //necesario poner vars en el arreglo de dependencias
  const deleteElement=useCallback((id)=>{
    setElements(prevState=>prevState.filter((item)=>item.id!==id));
  },[]);

  const handleLike=useCallback((id)=>{
    setElements(prevState=>prevState.map((item)=>item.id===id ? {...item, like: !item.like} : item));
  },[]);

  //Hacer la pregunta fuera del renderizado (isEmptyElements)
  //arreglo.lenght<=0 ? true : false
  //arreglo.length<=0 (ya devuelve un "true implícito")
  let isEmptyElements=useMemo(()=>elements.length<=0,[elements]);
  console.log(isEmptyElements);

  return (
    <div>
        <Likes likes={likes} />
        <div className="contenedor">
          {/* <Formulario /> */}
          {/* La f interna dentro del customForm, recibe el submit */}
          {createForm(handleSubmit)}
          {
            isEmptyElements ? (
              <div className='elementsNotFound'>
                No hay elementos para mostrar
              </div>
            ) : (
              <CardList 
                elements={elements} 
                deleteElement={deleteElement} 
                handleLike={handleLike}
              />
            )
          }
        </div>
    </div>
  );
};
