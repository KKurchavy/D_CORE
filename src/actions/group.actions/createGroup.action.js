import { createGroup, loadGroups } from "../../connection/groups.requests";

export const CREATE_GROUP_SUCCESS = "CREATE_GROUP_SUCCESS";
export const CREATE_GROUP_FAILED = "CREATE_GROUP_FAILED";

export const createGroupAction = body => dispatch => {
  createGroup(body)
    .then(() => {
      loadGroups()
        .then(arr => {
          dispatch({
            type: CREATE_GROUP_SUCCESS,
            payload: arr
          });
        });
    })

    .catch(err => {
      dispatch({
        type: CREATE_GROUP_FAILED,
        payload: {}
      });
    });
};
