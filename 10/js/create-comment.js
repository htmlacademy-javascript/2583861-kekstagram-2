import { COMMENTS, NAMES } from './data.js';
import { getRandomNumber, createIdGenerator } from './utils.js';

const createCommentsId = createIdGenerator(1, 1000);

function createComment () {
  return {
    id: createCommentsId(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[getRandomNumber(0, COMMENTS.length - 1)],
    name: NAMES[getRandomNumber(0, NAMES.length - 1)],
  };
}

export {createComment};
