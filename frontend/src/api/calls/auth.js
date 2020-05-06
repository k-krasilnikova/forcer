import api from "../index";

export const signinRequest = (payload) => {
  return api.post("/auth/signin", payload);
};
