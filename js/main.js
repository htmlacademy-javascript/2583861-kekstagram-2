const DESCRIPTION = [
  'Пейзажное фото',
  'Портретное фото',
  'Уличное фото',
  'Интерьерное фото',
  'Семейное фото',
  'Селфи фото',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Антон',
  'Василий',
  'Григорий',
  'Дмитрий',
  'Евгений',
  'Кирилл',
  'Максим',
  'Никита',
];

const PHOTO_COUNT = 25;

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createIdGenerator (min, max) {
  const usedId = [];
  return function () {
    let currentId = getRandomNumber(min, max);
    if (usedId.length >= max - min + 1) {
      return null;
    }
    while (usedId.includes(currentId)) {
      currentId = getRandomNumber(min, max);
    }
    usedId.push(currentId);
    return currentId;
  };
}

const createPhotoId = createIdGenerator(1, PHOTO_COUNT);
const createPhotoNumber = createIdGenerator(1, PHOTO_COUNT);
const createCommentsId = createIdGenerator(1, 1000);

function createComment () {
  return {
    id: createCommentsId(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[getRandomNumber(0, COMMENTS.length - 1)],
    name: NAMES[getRandomNumber(0, NAMES.length - 1)],
  };
}

const createPhoto = () => ({
  id: createPhotoId(),
  url: `photos/${ createPhotoNumber() }.jpg`,
  description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)],
  likes: getRandomNumber(15, 200),
  comments: Array.from({length: getRandomNumber(1, 30)}, createComment),
});

const createPhotoArray = Array.from({length: PHOTO_COUNT}, createPhoto);

createPhotoArray();
