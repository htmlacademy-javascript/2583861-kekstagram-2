import { openUploadForm, closeUploadForm } from './user-actions.js';
import { onFormValidator } from './upload-form-validator.js';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoOverlay = uploadPhotoForm.querySelector('.img-upload__overlay');
const uploadPhotoInput = uploadPhotoForm.querySelector('.img-upload__input');
const uploadPhotoFormCloseButton = uploadPhotoForm.querySelector('.img-upload__cancel');

uploadPhotoInput.addEventListener('change', () => {
  openUploadForm();
  uploadPhotoFormCloseButton.addEventListener('click', closeUploadForm);
  uploadPhotoForm.addEventListener('submit', onFormValidator);
});

export {uploadPhotoForm, uploadPhotoInput, uploadPhotoOverlay, uploadPhotoFormCloseButton};
