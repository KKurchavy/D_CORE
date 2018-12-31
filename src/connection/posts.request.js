import { URLS } from "./config";
import { getTokens } from "./authenticate";

export const createPost = body => {
  const tokenPair = getTokens();

  return fetch(URLS.GROUP_POSTS.CREATE, {
    method: "post",
    headers: {
      Authorization: `Bearer ${tokenPair.token}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
};

export const loadPosts = id => {
  const tokenPair = getTokens();

  return new Promise((resolve, reject) => {
    fetch(URLS.GROUP_POSTS.FIND_ALL_BY_GROUP_ID(id), {
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
