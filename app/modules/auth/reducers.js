import * as types from './types';

export const initialState = {
  isStarted: false,
  isAuthenticating: false,
  isAuthenticated: false,
  item: {},
  error: {},
};

// Add your reducers here, example:
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isStarted: true,
        isAuthenticating: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        item: action.payload.data,
      };
    case types.LOGIN_FAILURE:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};

const reducer = {
  auth: authReducer,
};

export default reducer;
