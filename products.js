const products = {};

export function addProduct(products, product) {
    products[product.id] = product; 
    console.log('Product added:', product);
  }
   
  export default products;