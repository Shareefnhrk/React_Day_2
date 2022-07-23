import { createStore } from "redux";

const INCREMENT = 'INCREMENT';  //action types
const DECREMENT = 'DECREMENT';
const ADD_TODO = "ADD_TODO";


function increment() {
    return { 
        type: ADD_TODO,  //action
    payload:{text:"learn Redux"} 
};  //action creators
}
function decrement() {
    return { type: DECREMENT };
}


function reducer(state = {counrte:5}, action) {   //reducer
    switch (action.type) {
        case ADD_TODO:
            return{...state,dataformComponent:action.payload}
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}


var store = createStore(reducer);  //redux-store
function enableDevTools() {
    return (
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default function LogState() {
    // console.log(store.getState().toString());
    return (
        <div>
            <button onClick={(event) => store.dispatch(increment())}>increment</button>
            <button onClick={() => store.dispatch(decrement())}>decrement</button>
        </div>
    )
}

store.subscribe(LogState);  //register with reduxstore

store.dispatch({ type: '' });
store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());