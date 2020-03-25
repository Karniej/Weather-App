import * as types from './types';

export const initialState = {
  isFetching: false,
  list: [],
  error: {},
};

// Add your reducers here, example:
export const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FORECAST_DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_FORECAST_DATA_SUCCESS:
      return {
        ...state,
        list: action.payload.data.list,
        isFetching: false,
      };
    case types.GET_FORECAST_DATA_FAILURE:
      return {
        ...initialState,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

const reducer = {
  forecast: forecastReducer,
};

export default reducer;
