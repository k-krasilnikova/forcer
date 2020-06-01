import api from "../index";

export const signinRequest = payload => {
  return api.post("/auth/signin", payload);
};

export const forgotPasswordRequest = payload => {
  return api.post("/auth/forgot-password", payload);
};
