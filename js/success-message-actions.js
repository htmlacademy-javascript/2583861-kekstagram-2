import { closeUploadForm } from './upload-form-actions';
import { onSuccessButtonClick, onDocumentKeydown, onOutsideClick } from './on-event-handlers';

const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const successButton = successMessage.querySelector('.success__button');

const closeSuccessMessage = () => {
  if (document.contains(successMessage)) {
    successMessage.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onOutsideClick);
  }
};

const showSuccessMessage = () => {
  closeUploadForm();
  body.insertAdjacentElement('beforeend', successMessage);
  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onOutsideClick);
};

export { successMessage, closeSuccessMessage, showSuccessMessage};
