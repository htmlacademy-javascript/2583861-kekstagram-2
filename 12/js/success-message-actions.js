import { closeUploadForm } from './upload-form-actions';
import { onSuccessMessageKeydown } from './on-element-actions';
import { onOutsideClick } from './on-element-actions';

const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const successButton = successMessage.querySelector('.success__button');

const closeSuccessMessage = () => {
  successMessage.remove();
  document.removeEventListener('keydown', onSuccessMessageKeydown);
  document.removeEventListener('click', onOutsideClick);
};

const showSuccessMessage = () => {
  closeUploadForm();
  body.insertAdjacentElement('beforeend', successMessage);
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onSuccessMessageKeydown);
  document.addEventListener('click', onOutsideClick);
};

export { successMessage, closeSuccessMessage, showSuccessMessage};
