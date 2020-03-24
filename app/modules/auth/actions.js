import * as types from './types';

// Add your actions here, example:
const login = payload => ({
  types: [types.LOGIN_REQUEST, types.LOGIN_SUCCESS, types.LOGIN_FAILURE],
  payload: {
    request: {
      method: 'POST',
      url: api.LOGIN_EMAIL_PATH,
      data: payload,
    },
  },
});

export { login };
