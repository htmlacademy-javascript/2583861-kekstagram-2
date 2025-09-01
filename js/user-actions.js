import { isEscapeKey, isNotFocused } from './utils.js';
import { bigPhoto, bigPhotoMoreCommentsButton, bigPhotoCloseButton } from './create-big-photo.js';
import { clearRenderedComments, renderMoreComments } from './render-comments.js';
import { uploadPhotoForm, uploadPhotoOverlay, uploadPhotoFormCloseButton } from './upload-photo-handler.js';
import { uploadHashtagInput, uploadDescriptionInput, validateFormInputs, resetUploadForm } from './pristine-validator.js';
import { uploadPhotoScaleSmallerButton, uploadPhotoScaleBiggerButton, effectsList } from './upload-photo-handler.js';
import { scaleUpPhoto, scaleDownPhoto, resetScaleValue } from './scale-controls.js';
import { changeEffect } from './nouislider-change-effects.js';

const openPhoto = () => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePhoto = () => {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  bigPhotoCloseButton.removeEventListener('click', closePhoto);
  bigPhotoMoreCommentsButton.classList.remove('hidden');
  bigPhotoMoreCommentsButton.removeEventListener('click', renderMoreComments);
  clearRenderedComments();
};

const openUploadForm = () => {
  uploadPhotoOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUploadForm = () => {
  uploadPhotoOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadPhotoFormCloseButton.removeEventListener('click', closeUploadForm);
  uploadPhotoScaleSmallerButton.removeEventListener('click', scaleDownPhoto);
  uploadPhotoScaleBiggerButton.removeEventListener('click', scaleUpPhoto);
  resetScaleValue();
  effectsList.removeEventListener('click', changeEffect);
  uploadPhotoForm.removeEventListener('submit', validateFormInputs);
  resetUploadForm();
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (!bigPhoto.classList.contains('hidden')) {
      closePhoto();
    }
    if (!uploadPhotoOverlay.classList.contains('hidden')) {
      if (isNotFocused(uploadDescriptionInput) && isNotFocused(uploadHashtagInput)) {
        closeUploadForm();
      }
    }
  }
}

export { openPhoto, closePhoto, openUploadForm, closeUploadForm };
