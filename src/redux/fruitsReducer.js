const initialState = {
  fruits: ['Яблоко', 'Банан', 'Апельсин', 'Груша']
};

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return {
        ...state,
        fruits: [...state.fruits, action.payload]
      };
    default:
      return state;
  }
};

export default fruitsReducer;