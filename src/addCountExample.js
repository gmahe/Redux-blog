// Action Creators - You don't need to change these
const increment = () => ({ type: "increment" });
const decrement = () => ({ type: "decrement" });

// JSX
const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <button className="increment" onClick={increment}>
        Increment
      </button>
      <button className="decrement" onClick={decrement}>
        Decrement
      </button>
      Current Count: <span>{count}</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { count: state.count };
};

// connect(mapStateToProps, {actions})(JSX)
const WrappedCounter = ReactRedux.connect(mapStateToProps, {
  increment,
  decrement,
})(Counter);

// Only change code *before* me!
// -----------
const store = Redux.createStore(
  Redux.combineReducers({
    // Reducers
    count: (count = 0, action) => {
      if (action.type === "increment") {
        return count + 1;
      } else if (action.type === "decrement") {
        return count - 1;
      } else {
        return count;
      }
    },
  })
);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <WrappedCounter />
  </ReactRedux.Provider>,
  document.querySelector("#root")
);
