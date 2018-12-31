import { login, signUp, logout, checkCurentSession } from "../../connection/authenticate";

export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const signUpAction = body => dispatch => {
  signUp(body)
    .then(user => {
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: user
      });
    })

    .catch(err => {
      dispatch({
        type: SIGN_UP_ERROR,
        payload: {}
      });
    });
};

export const signInAction = (email, password) => dispatch => {
  login(email, password)
    .then(user => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: user
      });
    })

    .catch(err => {
      dispatch({
        type: SIGN_IN_ERROR,
        payload: {}
      });
    });
};

export const logoutAction = body => dispatch => {
  logout()
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: {}
      });
    })

    .catch(err => {
      dispatch({
        type: LOGOUT_ERROR,
        payload: {}
      });
    });
};

export const preLoginAction = body => dispatch => {
  checkCurentSession()
    .then(user => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: user
      });
    })

    .catch(err => {
      dispatch({
        type: SIGN_IN_ERROR,
        payload: {}
      });
    });
};
