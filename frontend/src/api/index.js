import axios from "axios";

import { store } from "app";
import { refreshToken, logout } from "modules/auth/actions";

let domain = "";
const API_PREFIX = process.env.API_PREFIX || "api";
const API_VERSION = process.env.API_VERSION || "v1";

if (process.env.NODE_ENV === "production") {
  domain = `/${API_PREFIX}/${API_VERSION}/`;
} else {
  domain = `http://localhost:3001/${API_PREFIX}/${API_VERSION}/`;
}

let config = {
  baseURL: domain,
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Pragma: "no-cache",
  },
  params: {},
};

const api = axios.create(config);

export const setAuth = function(token) {
  if (token) {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

let authTokenRequest;

// This function makes a call to get the auth token
// or it returns the same promise as an in-progress call to get the auth token
function getAuthToken() {
  if (!authTokenRequest) {
    authTokenRequest = axios.post(`${domain}auth/refresh`, {
      refreshToken: store.getState().auth.refreshToken,
    });
    authTokenRequest.then(resetAuthTokenRequest, resetAuthTokenRequest);
  }

  return authTokenRequest;
}

function resetAuthTokenRequest() {
  authTokenRequest = null;
}

api.interceptors.response.use(
  (result) => result,
  (err) => {
    const error = err.response;
    if (store.getState().auth.refreshToken) {
      if (
        error.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest
      ) {
        return getAuthToken()
          .then((response) => {
            store.dispatch(refreshToken(response.data.token));
            error.config.headers["Authorization"] =
              "Bearer " + response.data.token;
            error.config.__isRetryRequest = true;
            error.config.url = error.config.url.split(error.config.baseURL)[1];
            return axios(error.config);
          })
          .catch(() => store.dispatch(logout()));
      }
    }
    return Promise.reject(error);
  }
);

export default api;
