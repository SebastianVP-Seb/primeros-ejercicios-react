import RICK_ACTIONS from "../actions/RickActions";

// Las acciones que se tendrán 
// page, characters y characterSelected se han definido en el estado
// const state={
//     page: 1,
//     characters: [],
//     characterSelected: {}
// };

// Se tiene que hacer el spread del state para no mutar el objeto, lo cual no es permitido en React
const RickReducer = (state, action) => {
    console.log(action);
    //Se muestra el tipo de acción en función de dónde se activan estas funciones
    switch (action.type) {
        case RICK_ACTIONS.INCREMENT_PAGE:
            return {
                ...state,
                page: state.page+1
            };

        case RICK_ACTIONS.DECREMENT_PAGE:
            return {
                ...state,
                page: state.page-1
            };

        case RICK_ACTIONS.SET_CHARACTERS:
            //el payload será la pág
            return {
                ...state,
                characters: [
                    ...action.payload
                ]
            };

        case RICK_ACTIONS.CHARACTER_SELECTED:
            //el payload es el id
            return {
                ...state,
                characterSelected: {
                    ...state.characters.filter(
                        item=>item.id===action.payload
                    )[0]
                }
            };

        case RICK_ACTIONS.CHANGE_PAGE:
            return {
                ...state,
                page: action.payload.page
            };

        case RICK_ACTIONS.REMOVE_CHARACTER:
            return {
                ...state,
                characterSelected: {}
            };

        default:
            return state;
    };
};

export default RickReducer;