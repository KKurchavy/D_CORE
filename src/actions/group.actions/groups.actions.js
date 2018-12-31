import { loadGroup, loadGroups } from '../../connection/groups.requests';

export const LOAD_GROUPS_SUCCESS = "LOAD_GROUPS_SUCCESS";
export const LOAD_GROUP_SUCCESS = "LOAD_GROUP_SUCCESS";

export const LOAD_GROUPS_ERROR = "LOAD_GROUPS_ERROR";
export const LOAD_GROUP_ERROR = "LOAD_GROUP_ERROR";


export const selectAndLoadGroup = (id) => dispatch => {
    loadGroup(id)
    .then(group => {
      dispatch({
        type: LOAD_GROUP_SUCCESS,
        payload: group
      });
    })

    .catch(err => {
      dispatch({
        type: LOAD_GROUP_ERROR,
        payload: { }
      });
    });
};

export const loadGroupsAction = () => dispatch => {
  loadGroups()
  .then(arr => {
    dispatch({
      type: LOAD_GROUPS_SUCCESS,
      payload: arr
    });
  })

  .catch(err => {
    dispatch({
      type: LOAD_GROUPS_ERROR,
      payload: []
    });
  });

};
