const ACTIONS_TODO={
    ACTION_ADD: 'Action Add',
    ACTION_DONE: 'Action Done',
    ACTION_DELETE: 'Action Delete'
};

export default ACTIONS_TODO;

export const actionAdd=(payload)=>{
    console.log(payload)
    //Muestra el todo creado, con la estructura que se le definió
    const createAction={
        type: ACTIONS_TODO.ACTION_ADD,
        payload
    }
    console.log(createAction);
    return createAction;
};

export const actionIsDone=(payload)=>({
    type: ACTIONS_TODO.ACTION_DONE,
    payload
});

export const actionDelete=(id)=>({
    type: ACTIONS_TODO.ACTION_DELETE,
    payload: {
        id
    }
});