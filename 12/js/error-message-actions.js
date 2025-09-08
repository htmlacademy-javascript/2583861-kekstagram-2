import { onErrorMessageKeydown } from './on-element-actions';
import { onOutsideClick } from './on-element-actions';

const body = document.querySelector('body');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorMessage.querySelector('.error__button');

const closeErrorMessage = () => {
  errorMessage.remove();
  document.removeEventListener('keydown', onErrorMessageKeydown);
  document.removeEventListener('click', onOutsideClick);
};

const showErrorMessage = () => {
  body.insertAdjacentElement('beforeend', errorMessage);
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onErrorMessageKeydown);
  document.addEventListener('click', onOutsideClick);
};

export { errorMessage, closeErrorMessage, showErrorMessage};
