import { DATA_ERROR_DURATION } from './const';

const body = document.querySelector('body');
const dataErrorMessage = document.querySelector('#data-error').content.querySelector('.data-error');

const deleteDataErrorMessage = () => dataErrorMessage.remove();

const showDataErrorMessage = () => {
  body.insertAdjacentElement('beforeend', dataErrorMessage);
  setTimeout(deleteDataErrorMessage, DATA_ERROR_DURATION);
};

export { showDataErrorMessage };
