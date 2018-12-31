import { editProfile } from '../../connection/users.requests';

export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_ERROR = "EDIT_PROFILE_ERROR";


export const editProfileAction = (body) => dispatch => {
    editProfile(body)
    .then(user => {
      dispatch({
        type: EDIT_PROFILE_SUCCESS,
        payload: user
      });
    })

    .catch(err => {
      dispatch({
        type: EDIT_PROFILE_ERROR,
        payload: { }
      });
    });

};