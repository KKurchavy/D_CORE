import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root.reduser";

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
