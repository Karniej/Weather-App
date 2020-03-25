import { combineReducers } from 'redux';

import forecastReducers from './forecast';
const rootReducer = combineReducers({
  forecastReducers,
});

export default rootReducer;
