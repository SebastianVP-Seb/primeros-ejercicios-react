import React, { useReducer } from 'react';
import './style.scss';

export const EjercicioUseReducer = () => {

    const ACTIONS={
        INCREMENT: 'Increment',
        DECREMENT: 'Decrement',
        TEXT_INPUT: 'TextInput',
        COLOR_TEXT: 'ColorText'
    };

    const reducer=(state, action) => {
        switch(action.type) {
            case ACTIONS.INCREMENT:
                return {...state, counter: state.counter +1};
            case ACTIONS.DECREMENT:
                return {...state, counter: state.counter -1};
            case ACTIONS.TEXT_INPUT:
                return {...state, textInput: action.payload};
            case ACTIONS.COLOR_TEXT:
                return {...state, colorText: !state.colorText};
            default:
                return state;
        };
    };

    const [state, dispatch]=useReducer(reducer, {
        counter: 0,
        textInput: '',
        colorText: false
    });

  return (
    <div style={{color: state.colorText ? 'blueviolet' : 'pink'}} className='ejercicioUseReducer' >
        <input
            value={state.textInput}
            onChange={(e)=>dispatch({
                type: ACTIONS.TEXT_INPUT, payload: e.target.value
            })}
        />
        <p>{state.counter}</p>
        <button onClick={()=>dispatch({type: ACTIONS.DECREMENT})}>-</button>
        <button onClick={()=>dispatch({type: ACTIONS.INCREMENT})}>+</button>
        <p>{state.textInput}</p>
        <button onClick={()=>dispatch({type: ACTIONS.COLOR_TEXT,})}>Color</button>
    </div>
  );
};
