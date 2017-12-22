import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from './modules/Home/redux/Home.reducers';

export default combineReducers({
  routing: routerReducer,
  home,
});
