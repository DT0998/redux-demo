const redux = require("redux");

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

// store
const store = redux.createStore(counterReducer);
// initial state
// console.log(store.getState());

// subcriber
const counterSubscriber = () => {
  const lastestState = store.getState();
  console.log(lastestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type:'increment',});