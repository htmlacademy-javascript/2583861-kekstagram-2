import { openUploadForm } from './upload-form-actions.js';

const FILE_UPLOAD_TYPES = ['jpg', 'jpeg', 'png'];

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoOverlay = uploadPhotoForm.querySelector('.img-upload__overlay');
const uploadPhotoInput = uploadPhotoForm.querySelector('.img-upload__input');
const uploadPhotoScaleSmallerButton = uploadPhotoForm.querySelector('.scale__control--smaller');
const uploadPhotoScaleBiggerButton = uploadPhotoForm.querySelector('.scale__control--bigger');
const uploadPreviewPhoto = uploadPhotoForm.querySelector('.img-upload__preview').querySelector('img');
const effectsList = uploadPhotoForm.querySelector('.effects');
const uploadPhotoFormCloseButton = uploadPhotoForm.querySelector('.img-upload__cancel');

const uploadInputHandler = () => {
  uploadPhotoInput.addEventListener('change', () => {
    const uploadingPhotoFile = uploadPhotoInput.files[0];
    const uploadingPhotoFileName = uploadingPhotoFile.name.toLowerCase();
    if (FILE_UPLOAD_TYPES.some((item) => uploadingPhotoFileName.endsWith(item))) {
      uploadPreviewPhoto.src = URL.createObjectURL(uploadingPhotoFile);
      openUploadForm();
    }
  });
};

export { uploadPhotoForm, uploadPhotoInput, uploadPhotoOverlay, uploadPhotoScaleSmallerButton, uploadPhotoScaleBiggerButton, uploadPreviewPhoto, effectsList, uploadPhotoFormCloseButton };
export { uploadInputHandler };
