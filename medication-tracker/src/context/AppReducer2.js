export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions1: state.transactions1.filter(
          (transaction1) => transaction1.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions1: [action.payload, ...state.transactions1],
      };
    default:
      return state;
  }
};
