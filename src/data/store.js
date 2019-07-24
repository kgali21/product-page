import techs from './tech.js';

const PRODUCT_KEY = 'products';
const SHOPPING_CART_KEY = 'shopping-cart';

getProducts() {
    let products = store.get(PRODUCT_KEY);

    if(!products){
        store.save(PRODUCT_KEY, techs);
        products = techs;
    }
    return products;
};

getShoppingCart() {
    let shoppingCart = store.get(SHOPPING_CART_KEY);

    if(!shoppingCart){
        shoppingCart = [];
    }
    return shoppingCart;
}