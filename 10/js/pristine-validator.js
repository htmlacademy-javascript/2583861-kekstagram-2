import { uploadPhotoInput } from './upload-photo-handler';
import { splitToNoSpacesArray, hasDuplicates } from './utils';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadHashtagInput = uploadPhotoForm.querySelector('.text__hashtags');
const uploadDescriptionInput = uploadPhotoForm.querySelector('.text__description');

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

const validateFormInputs = (evt) => {
  evt.preventDefault();
  pristine.validate();
  uploadHashtagInput.value = splitToNoSpacesArray(uploadHashtagInput.value).join(' ');
  uploadPhotoForm.submit();
};

export { uploadDescriptionInput, uploadHashtagInput };
export { validateFormInputs, resetUploadForm };
