function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const deepFreeze = (obj1) => {
    Object.keys(obj1).forEach((property) => {
      if (
        typeof obj1[property] === "object" &&
        !Object.isFrozen(obj1[property])
      )
        deepFreeze(obj1[property]);
    });
    return Object.freeze(obj1);
};