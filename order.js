
const orders = {};
export function placeOrder(orders, order) {
    orders[order.id] = order;  
    console.log('Order placed:', order);
  }
  
  export default orders;