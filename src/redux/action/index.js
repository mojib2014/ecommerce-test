//in actions,we tell them what we want
//For add item to cart
export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload:product
    }
}

//For Delete item from cart
export const delItem = (product) => {
    return {
        type: "DELITEM",
        payload:product
    }
}