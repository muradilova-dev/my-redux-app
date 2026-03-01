const initialState = [];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return [...state, { ...action.payload, id: Date.now() }];
    case 'UPDATE_FRUIT':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    case 'DELETE_FRUIT':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default fruitsReducer;