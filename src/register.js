
export function findProduct(techs, code){
    for(let i = 0; i < techs.length; i++){
        const techProduct = techs[i];

        if(techProduct.code === code){
            return techProduct;
        }
    }

    return null;
}

export function calcLineTotal(quantity, price){
    return Number((quantity * price).toFixed(2));
}

export function calcOrderTotal(cart, techs){

    let orderTotal = 0;
    
    for(let j = 0; j < cart.length; j++) {
        
        const itemData = findProduct(techs, cart[j].code);
        const lineTotal = calcLineTotal(cart[j].quantity, itemData.price);
        orderTotal += lineTotal;
    }
    return orderTotal;
    
}