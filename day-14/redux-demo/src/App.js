 import Counter from "./SecondCounter";
// import LogState from './Counter';

function App() {
  return (
    // <div className="App">
    //   <LogState/>
    // </div>
    <div>
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>

  );
}

export default App;
