import { createStore } from "redux";
const initialState = {
    orders: [],
    menuItems: {
      "Habit" : {
        "1" : ["Charburger", 6.25],
        "2" : ["Double char", 7.25],
        "3" : ["Triple char", 8.25],
        "4" : ["Salad", 9.25],
        "5" : ["Milk shake", 4.00],
      },
      "Pizza" : {
        "1" : ["Pizza1", 6.25],
        "2" : ["Pizza2", 7.25],
        "3" : ["Pizza3", 8.25],
        "4" : ["Pizza4", 9.25],
        "5" : ["Pizza5", 4.00],
      }
    }
  };


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