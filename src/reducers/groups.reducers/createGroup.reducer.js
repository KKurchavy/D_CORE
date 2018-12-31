import {
    CREATE_GROUP_SUCCESS,
    CREATE_GROUP_FAILED,
  } from "../../actions/group.actions/createGroup.action";
  
  
  const initialState = {
    all: [],
    selectedGroup: { }
  };
  
  export function createGroupReducer(state = initialState, action) {
    switch (action.type) {
      case CREATE_GROUP_SUCCESS:
        return {
          ...state,
          all: [...action.payload]
        };
      case CREATE_GROUP_FAILED:
        return {
          ...state
        };

      default:
        return state;
    }
  }