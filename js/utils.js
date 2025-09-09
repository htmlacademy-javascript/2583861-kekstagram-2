const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const splitToNoSpacesArray = (string) => string.trim().split(/\s+/);
const hasDuplicates = (arr) => new Set(arr).size !== arr.length;
const isNotFocused = (element) => element !== document.querySelector(':focus');

export { getRandomNumber, debounce, isEscapeKey, splitToNoSpacesArray, isNotFocused, hasDuplicates };
