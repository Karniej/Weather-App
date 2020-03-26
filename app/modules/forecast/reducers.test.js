import { forecastReducer, initialState } from './reducers';
import {
  GET_FORECAST_DATA_REQUEST,
  GET_FORECAST_DATA_SUCCESS,
  GET_FORECAST_DATA_FAILURE,
} from './types';
import { mockData } from 'constants';

describe('forecast reducer', () => {
  it('should return the initial state', () => {
    expect(forecastReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_FORECAST_DATA_REQUEST', () => {
    expect(
      forecastReducer(undefined, {
        type: GET_FORECAST_DATA_REQUEST,
      }),
    ).toEqual({
      list: [],
      error: {},
      isFetching: true,
    });
  });

  it('should handle GET_FORECAST_DATA_SUCCESS', () => {
    const actionPayload = {
      data: {
        list: mockData.list,
      },
    };
    expect(
      forecastReducer(undefined, {
        payload: actionPayload,
        type: GET_FORECAST_DATA_SUCCESS,
      }),
    ).toEqual({
      list: mockData.list,
      error: {},
      isFetching: false,
    });
  });

  it('should handle GET_FORECAST_DATA_FAILURE', () => {
    const actionPayload = {
      error: 'Could not find data',
    };
    expect(
      forecastReducer(undefined, {
        error: actionPayload,
        type: GET_FORECAST_DATA_FAILURE,
      }),
    ).toEqual({
      list: [],
      error: { error: 'Could not find data' },
      isFetching: false,
    });
  });
});
