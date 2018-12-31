import reduceReducers from 'reduce-reducers';
import { editProfileReducer } from './editUser.reducer';
import { deleteProfileReducer } from './deleteUser.reducer';

import {
  SIGN_UP_SUCCESS,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS
} from "../../actions/user.actions/authenticate.actions";


const initialState = {
  user: {},
  isAuthenticated: false
};

function authenticateReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload} 
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload}
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: { ...action.payload}
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: { ...action.payload}
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: { ...action.payload}
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        isAuthenticated: true,
      };

    default:
      return state;
  }
}

export const authenticate = reduceReducers(
  authenticateReducer,
  editProfileReducer,
  deleteProfileReducer,
  initialState
);
