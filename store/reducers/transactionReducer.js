import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../actions/types";

const initialState = {
  transactions: [
    { addedtime: 1576590342000, id: 2, title: "Ice Cream", price: -40 },
    { addedtime: 1576590342000, id: 3, title: "Paypal Income", price: 400 },
    { addedtime: 1274174256000, id: 4, title: "Bank Credit", price: 2000 },
    { addedtime: 1274174256000, id: 5, title: "Gucci", price: -1000 },
    { addedtime: 1274174256000, id: 6, title: "Transport fare", price: -10 },
    { addedtime: 779879856000, id: 7, title: "Swiggy", price: -500 },
    { addedtime: 779879856000, id: 9, title: "Funded my wallet", price: -200 },
    { addedtime: 779879856000, id: 10, title: "Salary", price: 2000 },
    { addedtime: 1613682000000, id: 11, title: "Give out", price: -10 },
    { addedtime: 1613682000000, id: 11, title: "Charity", price: -1000 },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};
