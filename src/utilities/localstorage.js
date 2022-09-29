// use local storage to manage cart data
const addToLocalStorage = time => {

    localStorage.setItem('break-time', JSON.stringify(time));
}



export {
    addToLocalStorage
}