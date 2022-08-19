import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CardList } from './components/cardLis/CardList';
import './app.scss';
import { ButtonShowList } from './components/buttonShowList/ButtonShowList';
import { useForm } from './components/useFormCustom/useForm';
import TO_DOS from './db/toDos';
import INPUTS from './db/dbInput';
import { EmptyToDos } from './components/emptyToDos/EmptyToDos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { EditComponent } from './components/editComponent/EditComponent';

export const ToDoList = () => {

  const [showList, setShowList]=useState(false);
  const [elements, setElements]=useState(TO_DOS);
  const [editing, setEditing]=useState(false);
  //id de la tarea a editar
  const [todoEditing, setTodoEditing]=useState(null);
  const [editingText, setEditingText]=useState('');
  
  const isEmptyToDos=elements.length<=0;

  const {createForm, resetForm}=useForm(INPUTS);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    let newElement={};
    Object.keys(INPUTS).forEach((item)=>{
      newElement={
        ...newElement,
        id: uuidv4(),
        [e.target[item].name]: e.target[item].value,
      };
      if(newElement.toDo.length<=0) {

        toast.error('You have to write something', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      } else {
        setElements([...elements, newElement]);
        toast.success('Added task', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        resetForm();
      }
    })
  };

  const handleShowToDos=useCallback(()=>{
      setShowList(!showList);
  }, [showList]);

  const deleteElement=useCallback((id)=>{
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, deleted it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
          )
        setElements(elements.filter(item=>item.id!==id));
      }
    })

  },[elements]);

  const handleComplete=useCallback((id)=>{

    Swal.fire({
      title: 'Have you already done this task?',
      text: "You won't be able to revert this!",
      icon: 'question',
      color: 'black',
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I have done it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Completed!',
          '',
          'success'
          )
        setElements(prevState=>prevState.map(
          (item)=>item.id===id ? {...item, complete: !item.complete} : item));
      }
    })
  },[]);

  const handleEdit=useCallback((item)=>{

    // setTodoEditing(prevState=>prevState=item.id)

    if(item.complete) {
      toast.warning('You cannot edit a task that has already been completed', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      setEditing(true);
    }
    setTodoEditing(item.id);
  }, []);

  const handleChange2=useCallback((e)=>{
    setEditingText(e.target.value);
  }, []);

  const editTodo=useCallback(id=>{
    const newTodos=[...elements].map((item)=>{
      if(item.id===id) {
        if(editingText.length<=0) {
          toast.error('You have to write something', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        } else {
          toast.success('Edited task', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          item.toDo=editingText;
          resetForm();
        }
      }
      return item;
    })
    setElements(newTodos);
    setTodoEditing(null);
    setEditingText('');
    setEditing(false);
  }, [elements, editingText, resetForm]);

  return (
    <div>
      <ToastContainer />
      {createForm(handleSubmit)}
        <ButtonShowList handleShowToDos={handleShowToDos} showList={showList} />
        {
          showList && editing ? (
          <EditComponent 
            editing={editing} 
            setEditing={setEditing}
            handleChange2={handleChange2}
            editingText={editingText}
            editTodo={editTodo}
            todoEditing={todoEditing}
          />
          ) : ( <></> )
        }
        {
          showList ? ( isEmptyToDos ? (<EmptyToDos />) :
            <CardList 
              elements={elements} 
              deleteElement={deleteElement}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
              editTodo={editTodo}
              setTodoEditing={setTodoEditing}
            />
          ) : ( <></> )
        }
    </div>
  );
};
