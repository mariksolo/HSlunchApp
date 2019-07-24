import { createStore } from "redux";
const initialState = {
    orders: []
  };

  // {
  //   restaurantID: action.restaurantID,
  //   itemID: action.itemID,
  //   quantity: action.quantity
  // }

  function cart(state = initialState, action) {
    switch (action.type) {
      case "ADD_TO_CART":
      const newOrders = state.orders.filter(
        order =>
          !(
            order.restaurantID == action.restaurantID &&
            order.itemID == action.itemID
          )
      )
      newOrders.push({
        restaurantID: action.restaurantID,
        itemID: action.itemID,
        quantity: action.quantity
      })
        return Object.assign({}, state, {
          orders: newOrders
        });
      case "REMOVE_FROM_CART":
        return {
          ...state,
          orders: state.orders.filter(
            order =>
              !(
                order.restaurantID == action.restaurantID &&
                order.itemID == action.itemID
              )
          )
        };
  
      default:
        return state;
    }
  }
  
export default store = createStore(cart);