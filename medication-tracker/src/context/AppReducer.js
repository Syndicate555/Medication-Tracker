export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "ADD_TRANSACTION2":
      return {
        ...state,
        transactions2: [action.payload, ...state.transactions2],
      };
    default:
      return state;
  }
};
