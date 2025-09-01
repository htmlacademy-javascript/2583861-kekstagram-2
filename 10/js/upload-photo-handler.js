import { openUploadForm, closeUploadForm } from './user-actions.js';
import { scaleUpPhoto, scaleDownPhoto } from './scale-controls.js';
import { validateFormInputs } from './pristine-validator.js';
import { changeEffect, disableSlider } from './nouislider-change-effects.js';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoOverlay = uploadPhotoForm.querySelector('.img-upload__overlay');
const uploadPhotoInput = uploadPhotoForm.querySelector('.img-upload__input');
const uploadPhotoScaleSmallerButton = uploadPhotoForm.querySelector('.scale__control--smaller');
const uploadPhotoScaleBiggerButton = uploadPhotoForm.querySelector('.scale__control--bigger');
const uploadPreviewPhoto = uploadPhotoForm.querySelector('.img-upload__preview').querySelector('img');
const effectsList = uploadPhotoForm.querySelector('.effects');
const uploadPhotoFormCloseButton = uploadPhotoForm.querySelector('.img-upload__cancel');

const uploadPhotoHandler = () => {
  uploadPhotoInput.addEventListener('change', () => {
    openUploadForm();
    uploadPhotoFormCloseButton.addEventListener('click', closeUploadForm);
    uploadPhotoScaleSmallerButton.addEventListener('click', scaleDownPhoto);
    uploadPhotoScaleBiggerButton.addEventListener('click', scaleUpPhoto);
    disableSlider();
    effectsList.addEventListener('click', changeEffect);
    uploadPhotoForm.addEventListener('submit', validateFormInputs);
  });
};

export { uploadPhotoForm, uploadPhotoInput, uploadPhotoOverlay, uploadPhotoScaleSmallerButton, uploadPhotoScaleBiggerButton, uploadPreviewPhoto, effectsList, uploadPhotoFormCloseButton };
export { uploadPhotoHandler };
