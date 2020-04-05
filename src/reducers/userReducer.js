export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    // return [action.payload];
    // return [...new Set([...state, action.payload])];

    default:
      return state;
  }
};
