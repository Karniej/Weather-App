import { applyMiddleware, createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import reducers from '../modules';
import client from './apiClient';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    axiosMiddleware(client, { returnRejectedPromiseOnError: true }),
  ),
);

export default store;
