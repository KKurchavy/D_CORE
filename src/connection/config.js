export const URLS =  {
  AUTHENTICATE: {
    LOGIN: "http://localhost:8080/login",
    REGISTRATION: "http://localhost:8080/signup",
    REFRESH: "http://localhost:8080/refresh",
    LOGOUT: "http://localhost:8080/logout"
  },
  USERS: {
    PROFILE: "http://localhost:8080/users/profile",
    EDIT_PROFILE: "http://localhost:8080/users/edit",
    DELETE_PROFILE: "http://localhost:8080/users/delete",
    ALL_USERS: "http://localhost:8080/users/",
    USER_PROFILE_BY_ID: id => `http://localhost:8080/users/find/${id}`
  },
  GROUPS: {
    CREATE: "http://localhost:8080/groups/create",
    ALL_GROUPS: "http://localhost:8080/groups/",
    DELETE_BY_ID: id => `http://localhost:8080/groups/delete/${id}`,
    SUBSCRIBE_BY_ID: id => `http://localhost:8080/groups/subscribe/${id}`,
    UNSUBSCRIBE_BY_ID: id => `http://localhost:8080/groups/unsubscribe/${id}`,
    GROUP_INFO_BY_ID:  id => `http://localhost:8080/groups/find/${id}`
  },
  GROUP_POSTS: {
    CREATE: "http://localhost:8080/posts/create",
    FIND_ALL_BY_GROUP_ID: id => `http://localhost:8080/posts/${id}`
  }
};
