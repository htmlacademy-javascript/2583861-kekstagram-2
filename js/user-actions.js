import { isEscapeKey, isNotFocused } from './utils.js';
import { bigPhoto, bigPhotoMoreCommentsButton } from './render-big-photo.js';
import { clearRenderedComments, renderMoreComments } from './render-comments.js';
import { uploadPhotoForm, uploadPhotoOverlay, uploadPhotoFormCloseButton } from './upload-photo.js';
import { uploadPhotoHashtagsInput, uploadPhotoDescriptionInput } from './upload-form-validator.js';
import { onFormValidator, resetUploadForm } from './upload-form-validator.js';

const openPhoto = () => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePhoto = () => {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
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
  uploadPhotoForm.removeEventListener('submit', onFormValidator);
  resetUploadForm();
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (!bigPhoto.classList.contains('hidden')) {
      closePhoto();
    }
    if (!uploadPhotoOverlay.classList.contains('hidden')) {
      if (isNotFocused(uploadPhotoDescriptionInput) && isNotFocused(uploadPhotoHashtagsInput)) {
        closeUploadForm();
      }
    }
  }
}

export { openPhoto, closePhoto, openUploadForm, closeUploadForm };
