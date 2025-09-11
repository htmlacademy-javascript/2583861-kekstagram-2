import { MAX_SCALE, MIN_SCALE, SCALE_STEP, HUNDRED } from './const';
import { uploadPreviewPhoto } from './upload-input-handler';

const scaleControlValue = document.querySelector('.scale__control--value');

let currentScaleValue;

const resetScaleValue = () => {
  scaleControlValue.value = '100%';
  uploadPreviewPhoto.style.transform = 'scale(1)';
};

const scaleUpPhoto = () => {
  currentScaleValue = parseFloat(scaleControlValue.value);
  if (currentScaleValue < MAX_SCALE) {
    currentScaleValue += SCALE_STEP;
    scaleControlValue.value = `${currentScaleValue}%`;
    uploadPreviewPhoto.style.transform = `scale(${currentScaleValue / HUNDRED})`;
  }
};

const scaleDownPhoto = () => {
  currentScaleValue = parseFloat(scaleControlValue.value);
  if (currentScaleValue > MIN_SCALE) {
    currentScaleValue -= SCALE_STEP;
    scaleControlValue.value = `${currentScaleValue}%`;
    uploadPreviewPhoto.style.transform = `scale(${currentScaleValue / HUNDRED})`;
  }
};

export { resetScaleValue, scaleUpPhoto, scaleDownPhoto };
