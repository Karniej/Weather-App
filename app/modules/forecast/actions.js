import * as types from './types';
import { api } from 'constants';
// Add your actions here, example:
const getForecastData = payload => ({
  types: [
    types.GET_FORECAST_DATA_REQUEST,
    types.GET_FORECAST_DATA_SUCCESS,
    types.GET_FORECAST_DATA_FAILURE,
  ],
  payload: {
    request: {
      method: 'POST',
      url: `${api.GET_FORECAST_DATA_PATH}q=${payload}`,
    },
  },
});

export { getForecastData };
