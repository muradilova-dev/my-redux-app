import { createStore } from 'redux';
import fruitsReducer from './fruitsReducer';

const store = createStore(fruitsReducer);

export default store;