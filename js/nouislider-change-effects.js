import { uploadPreviewPhoto } from './upload-photo-handler';

const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const enableSliderAndUpdateOptions = (minRange, maxRange, step) => {
  sliderContainer.classList.remove('hidden');
  slider.removeAttribute('disabled');
  slider.noUiSlider.updateOptions({
    range: {
      min: minRange,
      max: maxRange,
    },
    step: step,
    start: maxRange,
  });
};

const disableSlider = () => {
  slider.setAttribute('disabled', true);
  sliderContainer.classList.add('hidden');
  effectNone.checked = true;
  uploadPreviewPhoto.style.removeProperty('filter');
};

const changeEffect = (evt) => {
  if (evt.target.matches('#effect-chrome')) {
    enableSliderAndUpdateOptions(0, 1, 0.1);
    uploadPreviewPhoto.style.filter = 'grayscale(1)';
  } else if (evt.target.matches('#effect-sepia')) {
    enableSliderAndUpdateOptions(0, 1, 0.1);
    uploadPreviewPhoto.style.filter = 'sepia(1)';
  } else if (evt.target.matches('#effect-marvin')) {
    enableSliderAndUpdateOptions(0, 100, 1);
    uploadPreviewPhoto.style.filter = 'invert(100%)';
  } else if (evt.target.matches('#effect-phobos')) {
    enableSliderAndUpdateOptions(0, 3, 0.1);
    uploadPreviewPhoto.style.filter = 'blur(3px)';
  } else if (evt.target.matches('#effect-heat')) {
    enableSliderAndUpdateOptions(1, 3, 0.1);
    uploadPreviewPhoto.style.filter = 'brightness(3)';
  } else if (evt.target.matches('#effect-none')) {
    disableSlider();
  }
};

slider.noUiSlider.on('update', () => {
  effectLevelValue.value = slider.noUiSlider.get();
  if (effectChrome.checked) {
    uploadPreviewPhoto.style.filter = `grayscale(${effectLevelValue.value})`;
  } else if (effectSepia.checked) {
    uploadPreviewPhoto.style.filter = `sepia(${effectLevelValue.value})`;
  } else if (effectMarvin.checked) {
    uploadPreviewPhoto.style.filter = `invert(${effectLevelValue.value}%)`;
  } else if (effectPhobos.checked) {
    uploadPreviewPhoto.style.filter = `blur(${effectLevelValue.value}px)`;
  } else if (effectHeat.checked) {
    uploadPreviewPhoto.style.filter = `brightness(${effectLevelValue.value})`;
  }
});

export { changeEffect, disableSlider };
