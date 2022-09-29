const addToLocalStorage = time => {
    let breakTime = {};

    const storedData = localStorage.getItem('break-time');
    if (storedData) {
        breakTime = JSON.parse(storedData);
    }

    const quantity = breakTime[time];
    if (quantity) {
        const newQuantity = quantity + 1;
        breakTime[time] = newQuantity;
    }
    else {
        breakTime[time] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(breakTime));
}

// const removeFromDb = id => {
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         const shoppingCart = JSON.parse(storedCart);
//         if (id in shoppingCart) {
//             delete shoppingCart[id];
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//     }
// }

// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-cart');
// }

export {
    addToLocalStorage,
    // removeFromDb,
    // deleteShoppingCart
}