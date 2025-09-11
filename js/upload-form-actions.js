import { onDocumentKeydown } from './on-document-actions.js';
import { uploadDescriptionInput, uploadHashtagInput , setUserFormSubmit, resetUploadForm } from './pristine-validator.js';
import { scaleUpPhoto, scaleDownPhoto, resetScaleValue } from './scale-controls.js';
import { changeEffect, disableSlider } from './nouislider-change-effects.js';
import { errorMessage } from './error-message-actions.js';
import { isNotFocused } from './utils.js';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoFormCloseButton = uploadPhotoForm.querySelector('.img-upload__cancel');
const uploadPhotoOverlay = uploadPhotoForm.querySelector('.img-upload__overlay');
const uploadPhotoScaleSmallerButton = uploadPhotoForm.querySelector('.scale__control--smaller');
const uploadPhotoScaleBiggerButton = uploadPhotoForm.querySelector('.scale__control--bigger');
const effectsList = uploadPhotoForm.querySelector('.effects');

const closeUploadForm = () => {
  if (!uploadPhotoOverlay.classList.contains('hidden') && isNotFocused(uploadDescriptionInput) && isNotFocused(uploadHashtagInput) && !document.contains(errorMessage)) {
    uploadPhotoOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
    uploadPhotoFormCloseButton.removeEventListener('click', closeUploadForm);
    uploadPhotoScaleSmallerButton.removeEventListener('click', scaleDownPhoto);
    uploadPhotoScaleBiggerButton.removeEventListener('click', scaleUpPhoto);
    resetScaleValue();
    effectsList.removeEventListener('click', changeEffect);
    uploadPhotoForm.removeEventListener('submit', setUserFormSubmit);
    resetUploadForm();
  }
};

const openUploadForm = () => {
  uploadPhotoOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  uploadPhotoFormCloseButton.addEventListener('click', closeUploadForm);
  uploadPhotoScaleSmallerButton.addEventListener('click', scaleDownPhoto);
  uploadPhotoScaleBiggerButton.addEventListener('click', scaleUpPhoto);
  disableSlider();
  effectsList.addEventListener('click', changeEffect);
  uploadPhotoForm.addEventListener('submit', setUserFormSubmit);
};

export { openUploadForm, closeUploadForm };
