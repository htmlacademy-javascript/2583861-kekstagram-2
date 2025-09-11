import { isEscapeKey } from './utils.js';
import { closePhoto } from './photo-actions.js';
import { closeUploadForm } from './upload-form-actions.js';
import { successMessage, closeSuccessMessage } from './success-message-actions.js';
import { errorMessage, closeErrorMessage } from './error-message-actions.js';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhoto();
    closeUploadForm();
    closeSuccessMessage();
    closeErrorMessage();
  }
};

const onOutsideClick = (evt) => {
  if (evt.target === successMessage) {
    evt.preventDefault();
    closeSuccessMessage();
  }
  if (evt.target === errorMessage) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

export { onDocumentKeydown, onOutsideClick };
