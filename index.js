import users, {addUser} from './users.js';
import products, {addProduct} from './products.js';
import orders, {placeOrder} from './order.js';

addUser(users,{id:'1',name:'chetan'});
addUser(users,{id:'2',name:'rikhil'});

addProduct(products,{id:'1',name:'laptop'});
addProduct(products,{id:'2',name:'book'});

placeOrder(orders,{id:'1',name:'phone'});
placeOrder(orders,{id:'2',name:'bottle'});

console.log(users);
console.log(products);
console.log(orders);

// npm init -y