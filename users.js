
const users = {};
export function addUser(users, user) {
    users[user.id] = user; 
    console.log('User added:', user);
  }
  
export default users;
//demonstrat how arrow functions in js differ from traditional function expression in terms of syntax,this binding and implement js arrow built in methods like map,filter,reduce,foreach,and find to simplify operations such as transforming,filtering,aggregating,iterating and searching with arrays.