import {
  LOAD_PEOPLE_ERROR,
  LOAD_PEOPLE_SUCCESS,
  LOAD_PERSON_ERROR,
  LOAD_PERSON_SUCCESS
} from "../../actions/people.actions/people.actions";

const initialState = {
  all: [],
  selectedPerson: {}
};

export function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PEOPLE_SUCCESS:
      return {
        ...state,
        all: [...action.payload]
      };
    case LOAD_PEOPLE_ERROR:
      return {
        ...state
      };

    case LOAD_PERSON_SUCCESS:
      return {
        ...state,
        selectedPerson: { ...action.payload }
      };
    case LOAD_PERSON_ERROR:
      return {
        ...state
      };

    default:
      return state;
  }
}
