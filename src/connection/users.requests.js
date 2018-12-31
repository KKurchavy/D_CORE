import { URLS } from "./config";
import { getTokens, logout } from "./authenticate";

export const getProfile = () => {
  const tokenPair = getTokens();
  return fetch(URLS.USERS.PROFILE, {
    method: "get",
    headers: {
      Authorization: `Bearer ${tokenPair.token}`
    }
  })
    .then(res => res.json())
    .then(user => user)

    .catch(err => null);
};

export const deleteProfile = () => {
  const tokenPair = getTokens();

  return new Promise((resolve, reject) => {
    fetch(URLS.USERS.DELETE_PROFILE, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${tokenPair.token}`
      }
    })
      .then(() => {
        logout();
        resolve();
      })

      .catch(reject);
  });
};

export const editProfile = body => {
  const tokenPair = getTokens();

  return new Promise((resolve, reject) => {
    fetch(URLS.USERS.EDIT_PROFILE, {
      method: "put",
      headers: {
        Authorization: `Bearer ${tokenPair.token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const loadPerson = id => {
  const tokenPair = getTokens();

  return new Promise((resolve, reject) => {
    fetch(URLS.USERS.USER_PROFILE_BY_ID(id), {
      method: "get",
      headers: {
        Authorization: `Bearer ${tokenPair.token}`
      }
    })
      .then(res => res.json())
      .then(resolve)

      .catch(reject);
  });
};

export const loadPeople = () => {
  const tokenPair = getTokens();

  return new Promise((resolve, reject) => {
    fetch(URLS.USERS.ALL_USERS, {
      method: "get",
      headers: {
        Authorization: `Bearer ${tokenPair.token}`
      }
    })
      .then(res => res.json())
      .then(resolve)

      .catch(reject);
  });
};
