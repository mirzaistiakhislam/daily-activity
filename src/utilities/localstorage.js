// use local storage to manage cart data
const addToLocalStorage = time => {

    localStorage.setItem('break-time', JSON.stringify(time));
}

// const getStoredData = () => {
//     let breakTime = {};

//     //get the shopping cart from local storage
//     const storedData = localStorage.getItem('stored-Data');
//     if (storedData) {
//         breakTime = JSON.parse(storedData);
//     }
//     return breakTime;
// }


export {
    addToLocalStorage
}