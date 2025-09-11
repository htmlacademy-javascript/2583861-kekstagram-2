import { FILE_UPLOAD_TYPES } from './const.js';
import { openUploadForm } from './upload-form-actions.js';

const uploadPhotoInput = document.querySelector('.img-upload__input');
const uploadPreviewPhoto = document.querySelector('.img-upload__preview').querySelector('img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const uploadInputHandler = () => {
  uploadPhotoInput.addEventListener('change', () => {
    const uploadingPhotoFile = uploadPhotoInput.files[0];
    const uploadingPhotoFileName = uploadingPhotoFile.name.toLowerCase();
    if (FILE_UPLOAD_TYPES.some((item) => uploadingPhotoFileName.endsWith(item))) {
      uploadPreviewPhoto.src = URL.createObjectURL(uploadingPhotoFile);
      effectsPreview.forEach((item) => {
        item.style.backgroundImage = `url(${uploadPreviewPhoto.src})`;
      });
      openUploadForm();
    }
  });
};

export { uploadPhotoInput, uploadPreviewPhoto };
export { uploadInputHandler };
