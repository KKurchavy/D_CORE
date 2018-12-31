import { combineReducers } from "redux";

import { authenticate } from './user.reducers/authenticate.reducer';
import groupsReducer from './groups.reducers/groups.reducer';
import { peopleReducer } from './people.reducers/people.reducer';


export default combineReducers({
    authenticate: authenticate,
    groups: groupsReducer,
    people: peopleReducer
});
