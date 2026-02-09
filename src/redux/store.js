import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';   //  изменили на { thunk }
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
