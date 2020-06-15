export const email = (value) =>
  value &&
  (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
    value
  ) ||
    value.includes("@-"))
    ? "This field should contain email"
    : undefined;

export const required = (value) =>
  value && value.length !== 0 && (value === 0 || (value && /\w+/.test(value)))
    ? undefined
    : "This field is required";
