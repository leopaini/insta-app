// Reducer composition - search in react.
function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];

    case "REMOVE_COMMENT":
      console.log(action);
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];

    default:
      return state;
  }
}

export function commentsReducer(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}
