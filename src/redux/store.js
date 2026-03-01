<<<<<<< HEAD
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
=======
﻿import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';   //  изменили на { thunk }
>>>>>>> 1805cb00082ff44a9b8b6bc78ec5804c4ebdf309
import fruitsReducer from './fruitsReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  fruits: fruitsReducer,
  data: dataReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
