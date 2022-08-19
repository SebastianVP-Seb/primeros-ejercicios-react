import React, { useContext } from 'react';
import { DispatchContext, GlobalContext, RickContext } from '../context/contextInfo';
import Card from './Card';
import CharacterSelected from './CharacterSelected';

const Grid = () => {

    // const {characters}=useContext(RickContext);
    // const dispatch=useContext(DispatchContext);

    const {dispatch, state:{characters}}=useContext(GlobalContext);

  return (
    <div>
        <div>
            <CharacterSelected dispatch={dispatch} />
        </div>
        {
            characters.map((item)=>(
                <div key={item.id}>
                    <Card 
                        id={item.id}
                        value={item.name}
                        imgSrc={item.image}
                        dispatch={dispatch}
                    />
                </div>
            ))
        }
    </div>
  );
};

export default Grid;