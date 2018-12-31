import {
    DELETE_PROFILE_SUCCESS,
    DELETE_PROFILE_ERROR
  } from "../../actions/user.actions/deleteProfile.action";
  
  const initialState = {
    isAuthenticated: false,
    user: {}
  };
  
  export function deleteProfileReducer(state = initialState, action) {
    switch (action.type) {
      case DELETE_PROFILE_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
          user: {}
        };
      case DELETE_PROFILE_ERROR:
        return {
          ...state,
          isAuthenticated: true
        };
  
      default:
        return state;
    }
  }
  