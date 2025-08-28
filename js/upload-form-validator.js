import { uploadPhotoInput } from './upload-photo';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoHashtagsInput = uploadPhotoForm.querySelector('.text__hashtags');
const uploadPhotoDescriptionInput = uploadPhotoForm.querySelector('.text__description');

const pristine = new Pristine(uploadPhotoForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const hashtagValid = /^#[a-zа-яё0-9]{1,19}$/i;
const validateHashtags = (inputValue) => {
  if (inputValue !== '') {
    return inputValue.trim().split(/\s+/).every((element) => hashtagValid.test(element));
  } else {
    return true;
  }
};

const validateHashtagsCount = (inputValue) => inputValue.trim().split(/\s+/).length <= 5;

const hasDuplicates = (arr) => new Set(arr).size !== arr.length;
const validateHashtagsDuplicates = (inputValue) => !hasDuplicates(inputValue.trim().toLowerCase().split(/\s+/));

pristine.addValidator(uploadPhotoHashtagsInput, validateHashtags, 'введён невалидный хэштег');
pristine.addValidator(uploadPhotoHashtagsInput, validateHashtagsCount, 'превышено количество хэштегов');
pristine.addValidator(uploadPhotoHashtagsInput, validateHashtagsDuplicates, 'хэштеги повторяются');

const validateTextareaLength = (inputValue) => inputValue.length < 140;

pristine.addValidator(uploadPhotoDescriptionInput, validateTextareaLength, 'длина комментария больше 140 символов');

const onFormValidator = (evt) => {
  evt.preventDefault();
  pristine.validate();
  uploadPhotoHashtagsInput.value = uploadPhotoHashtagsInput.value.trim().split(/\s+/).join(' ');
  uploadPhotoForm.submit();
};

const resetUploadForm = () => {
  pristine.reset();
  uploadPhotoInput.value = '';
  uploadPhotoHashtagsInput.value = '';
  uploadPhotoDescriptionInput.value = '';
};

export { uploadPhotoDescriptionInput, uploadPhotoHashtagsInput };
export { onFormValidator, resetUploadForm };
