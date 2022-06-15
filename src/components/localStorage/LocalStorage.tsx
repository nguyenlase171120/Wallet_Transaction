export const localStorae = (name: string, value: string) => {
    const storage = localStorage.getItem(name);

    if (storage !== null) {
        const previousElement = document.getElementById(storage);
        if (previousElement !== null) {
            previousElement.style.backgroundColor = '#fff';
        }
        const myElement = document.getElementById(value);
        localStorage.setItem(name, value);
        if (myElement !== null) {
            myElement.style.backgroundColor = '#FAC213';
        }
    } else {
        localStorage.setItem(name, value);
        const myElement2 = document.getElementById(value);
        if (myElement2 !== null) {
            myElement2.style.backgroundColor = '#FAC213';
        }
    }
};
