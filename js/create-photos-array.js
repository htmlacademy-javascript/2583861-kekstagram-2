import {DESCRIPTION} from './data.js';
import {getRandomNumber, createIdGenerator} from './utils.js';
import {createComment} from './create-comment.js';

const PHOTO_COUNT = 25;

const createPhotoId = createIdGenerator(1, PHOTO_COUNT);
const createPhotoNumber = createIdGenerator(1, PHOTO_COUNT);

const createPhoto = () => ({
  id: createPhotoId(),
  url: `photos/${ createPhotoNumber() }.jpg`,
  description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)],
  likes: getRandomNumber(15, 200),
  comments: Array.from({length: getRandomNumber(1, 30)}, createComment),
});

const createPhotosArray = () => Array.from({length: PHOTO_COUNT}, createPhoto);

export {createPhotosArray};
