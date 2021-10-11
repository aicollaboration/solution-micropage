export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
};

export const removeLocalStorage = (key) => {
    console.log(key);
    return window.localStorage.removeItem(key);
};

export const isLoggedIn = () => {
    return window.localStorage.getItem('user') ? true : false;
};

export const removeAllStorage = () => {
    window.localStorage.clear();
};
