import { createStore } from 'redux';
import rootReducer from './modules/rootReduceres';

const store = createStore(rootReducer);

export default store;
