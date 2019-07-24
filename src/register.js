

export function findTech(techs, code){


    for(let i = 0; i < techs.length; i++){
        const tech = techs[i];

        if(tech.code === code){
            return tech;
        }
    }

    return null;
}

export function calcLineTotal(quantity, price){
    return Number((quantity * price).toFixed(2));
}

export function calcOrderTotal(shoppingCart, techs){






}