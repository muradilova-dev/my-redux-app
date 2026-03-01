const initialState = [];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
<<<<<<< HEAD
      return [...state, { ...action.payload, id: Date.now() }];
    case 'UPDATE_FRUIT':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    case 'DELETE_FRUIT':
      return state.filter(item => item.id !== action.payload);
=======
      return [...state, action.payload];
>>>>>>> 1805cb00082ff44a9b8b6bc78ec5804c4ebdf309
    default:
      return state;
  }
};

<<<<<<< HEAD
export default fruitsReducer;
=======
export default fruitsReducer;
>>>>>>> 1805cb00082ff44a9b8b6bc78ec5804c4ebdf309
