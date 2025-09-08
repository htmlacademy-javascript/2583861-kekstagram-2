const DATA_ERROR_DURATION = 5000;

const body = document.querySelector('body');
const dataErrorMessage = document.querySelector('#data-error').content.querySelector('.data-error');

const deleteDataErrorMessage = () => dataErrorMessage.remove();

const showDataErrorMessage = () => {
  body.insertAdjacentElement('beforeend', dataErrorMessage);
  setTimeout(deleteDataErrorMessage, DATA_ERROR_DURATION);
};

export { showDataErrorMessage };
