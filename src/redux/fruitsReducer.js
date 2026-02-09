const initialState = [];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default fruitsReducer;
