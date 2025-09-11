const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data/',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные! Попробуйте еще раз',
  [Method.POST]: 'Не удалось отправить данные формы'
};

const DATA_ERROR_DURATION = 5000;

const DEBOUNCE_DELAY_TIME = 500;

const COMMENTS_COUNT_TO_RENDER = 5;

const MAX_SCALE = 100;

const MIN_SCALE = 25;

const SCALE_STEP = 25;

const HUNDRED = 100;

const Effects = {
  chrome: {
    sliderOptions: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    },
    maxValue: 1,
    setFilterValue: (value) => `grayscale(${value})`,
  },
  sepia: {
    sliderOptions: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    },
    maxValue: 1,
    setFilterValue: (value) => `sepia(${value})`,
  },
  marvin: {
    sliderOptions: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100,
    },
    maxValue: 100,
    setFilterValue: (value) => `invert(${value}%)`,
  },
  phobos: {
    sliderOptions: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3,
    },
    maxValue: 3,
    setFilterValue: (value) => `blur(${value}px)`,
  },
  heat: {
    sliderOptions: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3,
    },
    maxValue: 3,
    setFilterValue: (value) => `brightness(${value})`,
  }
};

const HASHTAG_REG_EXP = /^#[a-zа-яё0-9]{1,19}$/i;

const FILE_UPLOAD_TYPES = ['.jpg', '.jpeg', '.png', '.webp'];

export { BASE_URL, Route, Method, ErrorText, DATA_ERROR_DURATION, DEBOUNCE_DELAY_TIME, COMMENTS_COUNT_TO_RENDER, MAX_SCALE, MIN_SCALE, SCALE_STEP, HUNDRED, Effects, HASHTAG_REG_EXP, FILE_UPLOAD_TYPES };
