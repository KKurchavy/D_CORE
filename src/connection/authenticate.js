import { URLS } from "./config";
import { getProfile } from "./users.requests";

export const getTokens = () => {
  const tokensString = localStorage.getItem("tokenPair")
  return tokensString ? JSON.parse(tokensString) : null;
};

const setTokens = tokenPair => {
  if (tokenPair) {
    localStorage.setItem("tokenPair", JSON.stringify(tokenPair));
  }
};

const deleteToken = () => {
  localStorage.removeItem("tokenPair");
};

export const login = (email, password) => {
  const body = {
    email,
    password
  };

  return new Promise((resolve, reject) => {
    fetch(URLS.AUTHENTICATE.LOGIN, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        setTokens(res);
        resolve(getProfile());
      })

      .catch(reject);
  });
};

export const signUp = body => {
  return fetch(URLS.AUTHENTICATE.REGISTRATION, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(() => login(body.email, body.password));
};

export const logout = () => {
  const tokenPair = getTokens();
  deleteToken();
  return fetch(URLS.AUTHENTICATE.LOGOUT, {
    method: "get",
    headers: {
      Authorization: `Bearer ${tokenPair.token}`
    }
  });
};

export const checkCurentSession = () => {
  const tokenPair = getTokens();
  return new Promise(async (resolve, reject) => {
    if (!tokenPair) {
      reject();
    } else {
      const user = await getProfile();

      if (!user) {
        refreshToken(tokenPair.refreshToken)
          .then(res => res.json)
          .then(res => {
            setTokens(res);
            resolve(getProfile());
          })
          .catch(reject);
      } else {
        resolve(user);
      }
      
    }
  });
};

const refreshToken = refreshToken => {
  return fetch(URLS.AUTHENTICATE.REFRESH, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ refreshToken })
  });
};
