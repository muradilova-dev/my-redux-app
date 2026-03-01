<<<<<<< HEAD
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
=======
export const addFruit = (fruitName) => ({
  type: 'ADD_FRUIT',
  payload: fruitName
>>>>>>> 1805cb00082ff44a9b8b6bc78ec5804c4ebdf309
});