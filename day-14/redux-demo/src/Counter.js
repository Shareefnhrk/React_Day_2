import { createStore } from "redux";

const INCREMENT = 'INCREMENT';  //action types
const DECREMENT = 'DECREMENT';


function increment() {
  return { type: INCREMENT };  //action creators
}
function decrement() {
  return { type: DECREMENT };
}


function reducer(state = 0, action) {   //reducer
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}


var store = createStore(reducer);  //redux-store

export default function LogState() {
  console.log(store.getState().toString());
  return(
    <div>
    <button>click</button>
    </div>
  )
}

store.subscribe(LogState);

store.dispatch({ type: '' });
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());