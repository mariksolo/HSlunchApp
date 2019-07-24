export default function addToCart(restaurantID, itemID, quantity) {
    return {
      type: "ADD_TO_CART",
      restaurantID,
      itemID,
    //   uuid,
      quantity
    };
  }
  
function removeFromCart(restaurantID, itemID) {
    return {
      type: "REMOVE_FROM_CART",
      restaurantID,
      itemID,
    };
  }

export {addToCart, removeFromCart};