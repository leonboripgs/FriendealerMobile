const initialState = {
  user: []
};
export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case "SET_USER_TOKEN":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
