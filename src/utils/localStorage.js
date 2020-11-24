export const onLoadFromLocalStorage = () => {
  try {
    const persistedNumber = localStorage.getItem("number");
    if (persistedNumber === null) {
      return undefined;
    }
    return JSON.parse(persistedNumber); 
  } catch (error) {
    return undefined;
  }
};

export const onSafeToLocalStorage = (state) => {
    const persistedNumber = JSON.stringify(state);
    localStorage.setItem("number", persistedNumber);
};
