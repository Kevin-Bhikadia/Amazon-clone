export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => {
  //   basket?.reduce((amount, item) => item.price + amount, 0);
  let amount = 0;
  for (var x = 0; x < basket?.length; x++) {
    amount += basket[x].price;
  }

  return amount;
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id : ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
  }
};

export default reducer;
