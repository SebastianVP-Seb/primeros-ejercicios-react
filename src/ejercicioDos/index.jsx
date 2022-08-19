import React, { useEffect, useState } from 'react';

const inicio=7;
export default function EjercicioDos() {

    const [segundos,setSegundos]=useState(inicio);
    const [vuelta, setVuelta]=useState(false);

    useEffect(()=>{
        let cuenta;
        if(vuelta) {
            cuenta=setInterval(()=>{
                setSegundos(prevState=>prevState+1);
            },1000);
        }
        return (()=>{
            clearInterval(cuenta);
            console.log(cuenta)
        });
    },[vuelta]);

    const handleStart=()=>{
        setVuelta(true);
    };

    const handleStop=()=>{
        setVuelta(false);
    };

    const handleReset=()=>{
        setSegundos(7);
    };

  return (
    <div>
        <h4>Seconds: {segundos}</h4>
        <div className="buttons">
            <button disabled={vuelta ? true : false} onClick={handleStart}>Start</button>
            <button disabled={vuelta ? false : true} onClick={handleStop}>Stop</button>
            <button disabled={vuelta || segundos===7 ? true : false} onClick={handleReset}>Reset</button>
        </div>
    </div>
  );
};
