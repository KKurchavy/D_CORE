import {
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ERROR
} from "../../actions/user.actions/editProfile.action";

const initialState = {
  isAuthenticated: true,
  user: {}
};

export function editProfileReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        user: { ...action.payload}
      };
    case EDIT_PROFILE_ERROR:
      return {
        ...state,
        user: { ...action.payload}
      };

    default:
      return state;
  }
}
