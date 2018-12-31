import {
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_FAILED
} from "../../actions/group.actions/deleteGroup.action";


const initialState = {
  all: [],
  selectedGroup: { }
};

export function deleteGroupReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_GROUP_SUCCESS:
      return {
        ...state,
        all: [...action.payload],
        selectedGroup: {}
      };
    case DELETE_GROUP_FAILED:
      return {
        ...state
      };

    default:
      return state;
  }
}