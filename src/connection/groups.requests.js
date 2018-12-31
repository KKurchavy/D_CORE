import { URLS } from "./config";
import { getTokens } from "./authenticate";



export const createGroup = body => {
  const tokenPair = getTokens();

  return fetch(URLS.GROUPS.CREATE, {
      method: "post",
      headers: {
        Authorization: `Bearer ${tokenPair.token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
};


export const deleteGroup = id => {
  const tokenPair = getTokens();

  return fetch(URLS.GROUPS.DELETE_BY_ID(id), {
      method: "delete",
      headers: {
        Authorization: `Bearer ${tokenPair.token}`
      }
    })
};


export const unsubscribeToGroup = id => {
  const tokenPair = getTokens();

  return new Promise((resolve, reject) => {
    fetch(URLS.GROUPS.UNSUBSCRIBE_BY_ID(id), {
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


export const subscribeToGroup = id => {
  const tokenPair = getTokens();

  return new Promise((resolve, reject) => {
    fetch(URLS.GROUPS.SUBSCRIBE_BY_ID(id), {
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


export const loadGroup = id => {
  const tokenPair = getTokens();

  return new Promise((resolve, reject) => {
    fetch(URLS.GROUPS.GROUP_INFO_BY_ID(id), {
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


export const loadGroups = () => {
  const tokenPair = getTokens();

  return new Promise((resolve, reject) => {
    fetch(URLS.GROUPS.ALL_GROUPS, {
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
