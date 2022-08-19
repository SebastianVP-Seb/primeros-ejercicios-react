const RICK_ACTIONS = {
    CHANGE_PAGE: 'Change Page',
    INCREMENT_PAGE: 'Increment Page',
    DECREMENT_PAGE: 'Decrement Page',
    SET_CHARACTERS: 'Set Characters',
    CHARACTER_SELECTED: 'Character Selected',

    REMOVE_CHARACTER: 'Remove Character'
};

export default RICK_ACTIONS;

//"Firmas"

export const removeCharacterActionSignature=()=>({
    type: RICK_ACTIONS.REMOVE_CHARACTER
});

export const incrementPageActionSignature=()=>({
    type: RICK_ACTIONS.INCREMENT_PAGE
});

export const decrementPageActionSignature=()=>({
    type: RICK_ACTIONS.DECREMENT_PAGE
});

export const characterActionSignature=(payload)=>({
    type: RICK_ACTIONS.SET_CHARACTERS,
    payload
});

export const setCharacterActionSignature=(id)=>({
    type: RICK_ACTIONS.CHARACTER_SELECTED,
    payload: id
});

export const changePageActionSignature=(page)=>({
    type: RICK_ACTIONS.CHANGE_PAGE,
    payload: { page }
})


