import React, { useContext, useEffect, useReducer } from 'react';
import { characterActionSignature } from './actions/RickActions';
import ButtonsRick from './components/ButtonsRick';
import Grid from './components/Grid';
import Loading from './components/Loading.hoc';
import { DispatchContext, GlobalContext, LoadingContext, RickContext } from './context/contextInfo';
import useFetch from './hooks/useFetch';
import RickReducer from './reducers/RickReducer';

const RickMortyApp = () => {

    /*Characters es el arreglo de los personajes */
    const initialState={
        page: 1,
        characters: [],
        characterSelected: {}
    };

    const {loading, requestAPI}=useFetch();

    //El 3er parámetro es un callback que ayuda a inicializar el estado
    const [state, dispatch]=useReducer(RickReducer, initialState);

    // const InfoContext2=useContext(initialState);
    // console.log(InfoContext2)

    //initialState=state
    const {page, characters, characterSelected}=state;
    // El fetch se debe poner en un useEffect 
    useEffect(()=>{
        //Las promesas se van encadenando, desde useFetch
        requestAPI(page)
            .then(data=>
                // console.log(characterActionSignature(data.results)))
                //se le manda el payload (los resultados que necesita)
                dispatch(
                    characterActionSignature(data.results))
                )
    },[page]);

    useEffect(()=>{
        console.log(state)
    },[]);

    const ObjetoInicial={
        state, dispatch, loading
    };

  return (
    // <RickContext.Provider value={state}>
    //     <ButtonsRick dispatch={dispatch} currentPage={page} />
    //     <Loading loading={loading} >
    //         <Grid 
    //             characters={characters} 
    //             dispatch={dispatch}
    //             characterSelected={characterSelected}
    //         />
    //     </Loading>
    // </RickContext.Provider>

    // <RickContext.Provider value={state}>
    //     <DispatchContext.Provider value={dispatch}>
    //         <ButtonsRick />
    //         <LoadingContext.Provider value={loading}>
    //             <Loading >
    //                 <Grid />
    //             </Loading>
    //         </LoadingContext.Provider>
    //     </DispatchContext.Provider>
    // </RickContext.Provider>
    
    <GlobalContext.Provider value={ObjetoInicial}>
        <ButtonsRick />
        <Loading >
            <Grid />
        </Loading>
    </GlobalContext.Provider>
  );
};

export default RickMortyApp;