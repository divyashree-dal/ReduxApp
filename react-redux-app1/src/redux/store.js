import {createStore} from 'redux';
import {reducers} from './reducers/index';


// first arg : reducers, second arg : pre loaded state
// ref : https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(reducers,{},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;