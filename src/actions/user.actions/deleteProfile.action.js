import { deleteProfile } from '../../connection/users.requests';

export const DELETE_PROFILE_SUCCESS = "DELETE_PROFILE_SUCCESS";
export const DELETE_PROFILE_ERROR = "DELETE_PROFILE_ERROR";


export const deleteProfileAction = () => dispatch => {
    deleteProfile()
    .then(() => {
      dispatch({
        type: DELETE_PROFILE_SUCCESS,
        payload: { }
      });
    })

    .catch(err => {
      dispatch({
        type: DELETE_PROFILE_ERROR,
        payload: { }
      });
    });

};