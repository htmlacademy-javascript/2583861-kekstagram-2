const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createIdGenerator = (min, max) => {
  const usedId = new Set();
  return function () {
    let currentId = getRandomNumber(min, max);
    if (usedId.length >= max - min + 1) {
      return null;
    }
    while (usedId.has(currentId)) {
      currentId = getRandomNumber(min, max);
    }
    usedId.add(currentId);
    return currentId;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomNumber, createIdGenerator };
export { isEscapeKey };
