import { uploadPreviewPhoto } from './upload-input-handler';

const scaleControlValue = document.querySelector('.scale__control--value');

let currentScaleValue;

const resetScaleValue = () => {
  scaleControlValue.value = '100%';
  uploadPreviewPhoto.style.transform = 'scale(1)';
};

const scaleUpPhoto = () => {
  currentScaleValue = parseFloat(scaleControlValue.value);
  if (currentScaleValue < 100) {
    currentScaleValue += 25;
    scaleControlValue.value = `${currentScaleValue}%`;
    uploadPreviewPhoto.style.transform = `scale(${currentScaleValue / 100})`;
  }
};

const scaleDownPhoto = () => {
  currentScaleValue = parseFloat(scaleControlValue.value);
  if (currentScaleValue > 25) {
    currentScaleValue -= 25;
    scaleControlValue.value = `${currentScaleValue}%`;
    uploadPreviewPhoto.style.transform = `scale(${currentScaleValue / 100})`;
  }
};

export { resetScaleValue, scaleUpPhoto, scaleDownPhoto };
