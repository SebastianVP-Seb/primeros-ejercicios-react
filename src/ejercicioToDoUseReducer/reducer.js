import ACTIONS_TODO from "./actions";

const reducer=(state, action)=>{
    console.log(action);

    switch (action.type) {
      case ACTIONS_TODO.ACTION_ADD:
        return [...state, action.payload];

    case ACTIONS_TODO.ACTION_DONE:
        return state.map(
          item=>item.id===action.payload ?
            {...item, done: !item.done} : item);

      case ACTIONS_TODO.ACTION_DELETE:
        return state.filter(item=>item.id!==action.payload.id);

      default:
        return state;
    };
  };

export default reducer;