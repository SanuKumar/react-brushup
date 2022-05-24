// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_GUITAR":
      return { numGuitar: state.numGuitar + 1, showEmoji: true };
    case "REMOVE_GUITAR":
      return { numGuitar: state.numGuitar - 1, showEmoji: false };
    case "RESET":
      return { numGuitar: 1, showEmoji: false };
    default:
      return state;
  }
};
