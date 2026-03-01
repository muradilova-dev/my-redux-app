export const addFruit = (fruit) => ({
  type: 'ADD_FRUIT',
  payload: fruit
});

export const updateFruit = (fruit) => ({
  type: 'UPDATE_FRUIT',
  payload: fruit
});

export const deleteFruit = (id) => ({
  type: 'DELETE_FRUIT',
  payload: id
});