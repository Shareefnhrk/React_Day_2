import { createStore } from "redux";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function increment() {
  return { type: INCREMENT };
}
function decrement() {
  return { type: DECREMENT };
}

function reducer(state = 5, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
var store = createStore(reducer);

export default function Counter() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </React.Fragment>
  );
}

const element = (
  <div>
    <ReactRedux.Provider store={store}>
      <Counter />
    </ReactRedux.Provider>
  </div>
);
