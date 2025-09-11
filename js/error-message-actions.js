import { onDocumentKeydown, onOutsideClick } from './on-document-actions';

const body = document.querySelector('body');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorMessage.querySelector('.error__button');

const closeErrorMessage = () => {
  if (document.contains(errorMessage)) {
    errorMessage.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onOutsideClick);
  }
};

const showErrorMessage = () => {
  body.insertAdjacentElement('beforeend', errorMessage);
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onOutsideClick);
};

export { errorMessage, closeErrorMessage, showErrorMessage};
