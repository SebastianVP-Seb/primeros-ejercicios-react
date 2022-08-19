import React, { useContext } from 'react';
import { removeCharacterActionSignature } from '../actions/RickActions';
import { DispatchContext, GlobalContext, RickContext } from '../context/contextInfo';

const CharacterSelected = () => {

    // const {characterSelected}=useContext(RickContext);
    // const dispatch=useContext(DispatchContext);

    const {dispatch, state: {characterSelected}}=useContext(GlobalContext);
    
    const existItemSelected=characterSelected.name;
    console.log(existItemSelected);
    console.log(characterSelected);
    
  return (
    <div>
        {
            existItemSelected ? (
                <div>
                    Nombre={characterSelected.name}
                    <img src={characterSelected.image} alt={characterSelected.name} />
                    {/* imgSrc={characterSelected.image} */}
                    <button
                        onClick={()=>dispatch(removeCharacterActionSignature())}
                    >Q u i t</button>
                    <div>
                        <ul>
                            {Object.keys(characterSelected).map((item)=>{
                                // <li key={item} >{`${item}: ${characterSelected[item]}`}</li>
                                <li>{item.name}</li>
                            })}
                        </ul>
                    </div>
                </div>
            )
            : (
                <h3>There is not item selected</h3>
            )
        }
    </div>
  );
};

export default CharacterSelected;