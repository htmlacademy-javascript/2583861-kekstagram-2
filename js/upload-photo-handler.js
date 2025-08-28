import { openUploadForm, closeUploadForm } from './user-actions.js';
import { validateFormInputs } from './pristine-validator.js';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoOverlay = uploadPhotoForm.querySelector('.img-upload__overlay');
const uploadPhotoInput = uploadPhotoForm.querySelector('.img-upload__input');
const uploadPhotoFormCloseButton = uploadPhotoForm.querySelector('.img-upload__cancel');

const uploadPhotoHandler = () => {
  uploadPhotoInput.addEventListener('change', () => {
    openUploadForm();
    uploadPhotoFormCloseButton.addEventListener('click', closeUploadForm);
    uploadPhotoForm.addEventListener('submit', validateFormInputs);
  });
};

export { uploadPhotoForm, uploadPhotoInput, uploadPhotoOverlay, uploadPhotoFormCloseButton };
export { uploadPhotoHandler };
