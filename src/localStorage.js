// Kfir Tayar 208991430

const LocalStorage = {
    get: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },

    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export default LocalStorage;
