export function setUserToken(token) {
  return {
    type: "SET_USER_TOKEN",
    payload: token
  };
}
