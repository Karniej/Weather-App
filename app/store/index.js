import { applyMiddleware, createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import client from './apiClient';
import { forecastReducer } from '../modules/forecast/reducers';

const store = createStore(
  forecastReducer,
  applyMiddleware(
    thunk,
    axiosMiddleware(client, { returnRejectedPromiseOnError: true }),
  ),
);

export default store;
