import { isEscapeKey, isNotFocused } from './utils.js';
import { uploadHashtagInput, uploadDescriptionInput} from './pristine-validator.js';
import { closePhoto } from './photo-actions.js';
import { closeUploadForm } from './upload-form-actions.js';
import { successMessage, closeSuccessMessage } from './success-message-actions.js';
import { errorMessage, closeErrorMessage } from './error-message-actions.js';


const onBigPhotoKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhoto();
  }
};

const onUploadFormKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    if (isNotFocused(uploadDescriptionInput) && isNotFocused(uploadHashtagInput) && !document.contains(errorMessage)) {
      evt.preventDefault();
      closeUploadForm();
    }
  }
};

const onSuccessMessageKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onErrorMessageKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
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

export { onBigPhotoKeydown, onUploadFormKeydown, onSuccessMessageKeydown, onErrorMessageKeydown, onOutsideClick };
