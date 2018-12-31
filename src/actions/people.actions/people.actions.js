import { loadPerson, loadPeople } from "../../connection/users.requests";

export const LOAD_PEOPLE_SUCCESS = "LOAD_PEOPLE_SUCCESS";
export const LOAD_PERSON_SUCCESS = "LOAD_PERSON_SUCCESS";

export const LOAD_PEOPLE_ERROR = "LOAD_PEOPLE_ERROR";
export const LOAD_PERSON_ERROR = "LOAD_PERSON_ERROR";

export const selectAndLoadPerson = id => dispatch => {
  loadPerson(id)
    .then(person => {
      dispatch({
        type: LOAD_PERSON_SUCCESS,
        payload: (person || { })
      });
    })

    .catch(err => {
      dispatch({
        type: LOAD_PERSON_ERROR,
        payload: {}
      });
    });
};

export const loadPeopleAction = () => dispatch => {
  loadPeople()
    .then(arr => {
      dispatch({
        type: LOAD_PEOPLE_SUCCESS,
        payload: arr
      });
    })

    .catch(err => {
      dispatch({
        type: LOAD_PEOPLE_ERROR,
        payload: []
      });
    });
};
