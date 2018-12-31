import { subscribeToGroup } from "../../connection/groups.requests";
import { LOAD_GROUP_SUCCESS, LOAD_GROUP_ERROR } from "./groups.actions";


export const subscribeAction = (id) => dispatch => {
  subscribeToGroup(id)
    .then(group => {
      dispatch({
        type: LOAD_GROUP_SUCCESS,
        payload: group
      });
    })
    .catch(err => {
      dispatch({
        type: LOAD_GROUP_ERROR,
        payload: {}
      });
    });
};
