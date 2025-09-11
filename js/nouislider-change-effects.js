import { Effects } from './const';
import { uploadPreviewPhoto } from './upload-input-handler';

const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectRadioButtons = document.querySelectorAll('.effects__radio');
const effectNone = document.querySelector('#effect-none');

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

const enableSlider = () => {
  sliderContainer.classList.remove('hidden');
  slider.removeAttribute('disabled');
};

const disableSlider = () => {
  slider.setAttribute('disabled', true);
  sliderContainer.classList.add('hidden');
  effectNone.checked = true;
  uploadPreviewPhoto.style.removeProperty('filter');
};

const changeEffect = (evt) => {
  const targetEffect = Effects[evt.target.value];
  if (evt.target.matches('input[type="radio"]')) {
    if (evt.target.matches('input[type="radio"][value="none"]')) {
      disableSlider();
    } else {
      enableSlider();
      slider.noUiSlider.updateOptions(targetEffect.sliderOptions);
      uploadPreviewPhoto.style.filter = targetEffect.setFilterValue(targetEffect.maxValue);
    }
  }
};

slider.noUiSlider.on('update', () => {
  effectLevelValue.value = slider.noUiSlider.get();
  effectRadioButtons.forEach((button) => {
    if (button.checked && button.value !== 'none') {
      uploadPreviewPhoto.style.filter = Effects[button.value].setFilterValue(effectLevelValue.value);
    }
  });
});

export { changeEffect, disableSlider };
