import { renderMoreComments } from './render-comments.js';
import { isEscapeKey } from './utils.js';
import { setUserFormSubmit } from './pristine-validator.js';
import { closePhoto } from './photo-actions.js';
import { closeUploadForm } from './upload-form-actions.js';
import { scaleDownPhoto, scaleUpPhoto } from './scale-controls.js';
import { changeEffect } from './nouislider-change-effects.js';
import { successMessage, closeSuccessMessage } from './success-message-actions.js';
import { errorMessage, closeErrorMessage } from './error-message-actions.js';

const onBigPhotoCloseButtonClick = () => {
  closePhoto();
};

const onMoreCommentsButtonClick = () => {
  renderMoreComments();
};

const onUploadFormCloseButtonClick = () => {
  closeUploadForm();
};

const onScaleSmallerButtonClick = () => {
  scaleDownPhoto();
};

const onScaleBiggerButtonClick = () => {
  scaleUpPhoto();
};

const onChangeEffectButtonClick = (evt) => {
  changeEffect(evt);
};

const onUserFormSubmitButtonClick = (evt) => {
  setUserFormSubmit(evt);
};

const onSuccessButtonClick = () => {
  closeSuccessMessage();
};

const onErrorButtonClick = () => {
  closeErrorMessage();
};

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

export { onBigPhotoCloseButtonClick, onMoreCommentsButtonClick, onUploadFormCloseButtonClick, onScaleSmallerButtonClick, onScaleBiggerButtonClick, onChangeEffectButtonClick, onUserFormSubmitButtonClick, onSuccessButtonClick, onErrorButtonClick, onDocumentKeydown, onOutsideClick };
