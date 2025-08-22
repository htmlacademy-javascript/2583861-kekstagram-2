import { isEscapeKey } from './utils.js';
import { bigPhoto, bigPhotoMoreCommentsButton } from './render-big-photo.js';
import { clearComments, renderMoreComments } from './render-comments.js';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey) {
    evt.preventDefault();
    bigPhoto.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
    clearComments();
    bigPhotoMoreCommentsButton.classList.remove('hidden');
  }
};

const openPhoto = () => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  bigPhotoMoreCommentsButton.classList.remove('hidden');
};

const closePhoto = () => {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  bigPhotoMoreCommentsButton.classList.remove('hidden');
  clearComments();
  bigPhotoMoreCommentsButton.removeEventListener('click', renderMoreComments);
};

export { openPhoto, closePhoto };
