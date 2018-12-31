import { deleteGroup, loadGroups } from '../../connection/groups.requests';

export const DELETE_GROUP_SUCCESS = "DELETE_GROUP_SUCCESS";
export const DELETE_GROUP_FAILED = "DELETE_GROUP_DAILED";


export const deleteGroupAction = id => dispatch => {
    deleteGroup(id)
    .then(() => {
        loadGroups()
        .then(arr => {
          dispatch({
            type: DELETE_GROUP_SUCCESS,
            payload: arr
          });
        });
    })

    .catch(() => {
        dispatch({
            type: DELETE_GROUP_FAILED
        })
    })
};