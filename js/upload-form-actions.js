import { uploadPhotoForm, uploadPhotoOverlay, uploadPhotoFormCloseButton, uploadPhotoScaleSmallerButton, uploadPhotoScaleBiggerButton, effectsList } from './upload-input-handler.js';
import { onUploadFormKeydown } from './on-element-actions.js';
import { setUserFormSubmit, resetUploadForm } from './pristine-validator.js';
import { scaleUpPhoto, scaleDownPhoto, resetScaleValue } from './scale-controls.js';
import { changeEffect } from './nouislider-change-effects.js';

const openUploadForm = () => {
  uploadPhotoOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onUploadFormKeydown);
};

const closeUploadForm = () => {
  uploadPhotoOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadFormKeydown);
  uploadPhotoFormCloseButton.removeEventListener('click', closeUploadForm);
  uploadPhotoScaleSmallerButton.removeEventListener('click', scaleDownPhoto);
  uploadPhotoScaleBiggerButton.removeEventListener('click', scaleUpPhoto);
  resetScaleValue();
  effectsList.removeEventListener('click', changeEffect);
  uploadPhotoForm.removeEventListener('submit', setUserFormSubmit);
  resetUploadForm();
};

export { openUploadForm, closeUploadForm };
