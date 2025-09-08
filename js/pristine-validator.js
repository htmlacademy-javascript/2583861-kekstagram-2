import { uploadPhotoInput } from './upload-input-handler';
import { splitToNoSpacesArray, hasDuplicates } from './utils';
import { showSuccessMessage } from './success-message-actions';
import { showErrorMessage } from './error-message-actions';
import { uploadPhotoToServer } from './api';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadHashtagInput = uploadPhotoForm.querySelector('.text__hashtags');
const uploadDescriptionInput = uploadPhotoForm.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const pristine = new Pristine(uploadPhotoForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const validateHashtagValue = (inputValue) => {
  const hashtagRegExp = /^#[a-zа-яё0-9]{1,19}$/i;
  if (inputValue === '') {
    return true;
  }
  return splitToNoSpacesArray(inputValue).every((element) => hashtagRegExp.test(element));
};
const validateHashtagsCount = (inputValue) => splitToNoSpacesArray(inputValue).length <= 5;
const validateHashtagsDuplicates = (inputValue) => !hasDuplicates(splitToNoSpacesArray(inputValue.toLowerCase()));
const validateTextareaLength = (inputValue) => inputValue.length < 140;

pristine.addValidator(uploadHashtagInput, validateHashtagValue, 'введён невалидный хэштег');
pristine.addValidator(uploadHashtagInput, validateHashtagsCount, 'превышено количество хэштегов');
pristine.addValidator(uploadHashtagInput, validateHashtagsDuplicates, 'хэштеги повторяются');
pristine.addValidator(uploadDescriptionInput, validateTextareaLength, 'длина комментария больше 140 символов');

const resetUploadForm = () => {
  pristine.reset();
  uploadPhotoInput.value = '';
  uploadHashtagInput.value = '';
  uploadDescriptionInput.value = '';
};

const setUserFormSubmit = async (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    uploadHashtagInput.value = splitToNoSpacesArray(uploadHashtagInput.value).join(' ');
    const formData = new FormData(uploadPhotoForm);
    try {
      await uploadPhotoToServer(formData);
      showSuccessMessage();
    } catch {
      showErrorMessage();
    } finally {
      unblockSubmitButton();
    }
  }
};

export { uploadDescriptionInput, uploadHashtagInput, setUserFormSubmit, resetUploadForm };
