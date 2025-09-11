import { isNotFocused } from './utils.js';
import { uploadDescriptionInput, uploadHashtagInput } from './pristine-validator.js';
import { onUploadFormCloseButtonClick, onScaleSmallerButtonClick, onScaleBiggerButtonClick, onChangeEffectButtonClick, onUserFormSubmitButtonClick, onDocumentKeydown } from './on-event-handlers.js';
import { resetScaleValue } from './scale-controls.js';
import { resetUploadForm } from './pristine-validator.js';
import { disableSlider } from './nouislider-change-effects.js';
import { errorMessage } from './error-message-actions.js';

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
    uploadPhotoFormCloseButton.removeEventListener('click', onUploadFormCloseButtonClick);
    uploadPhotoScaleSmallerButton.removeEventListener('click', onScaleSmallerButtonClick);
    uploadPhotoScaleBiggerButton.removeEventListener('click', onScaleBiggerButtonClick);
    resetScaleValue();
    effectsList.removeEventListener('click', onChangeEffectButtonClick);
    uploadPhotoForm.removeEventListener('submit', onUserFormSubmitButtonClick);
    resetUploadForm();
  }
};

const openUploadForm = () => {
  uploadPhotoOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  uploadPhotoFormCloseButton.addEventListener('click', onUploadFormCloseButtonClick);
  uploadPhotoScaleSmallerButton.addEventListener('click', onScaleSmallerButtonClick);
  uploadPhotoScaleBiggerButton.addEventListener('click', onScaleBiggerButtonClick);
  disableSlider();
  effectsList.addEventListener('click', onChangeEffectButtonClick);
  uploadPhotoForm.addEventListener('submit', onUserFormSubmitButtonClick);
};

export { uploadPhotoOverlay, openUploadForm, closeUploadForm };
