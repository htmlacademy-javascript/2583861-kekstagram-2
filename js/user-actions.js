import { isEscapeKey } from './utils.js';
import { bigPhoto, bigPhotoMoreCommentsButton } from './render-big-photo.js';
import { clearRenderedComments, renderMoreComments } from './render-comments.js';

const openPhoto = () => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePhoto = () => {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  bigPhotoMoreCommentsButton.classList.remove('hidden');
  bigPhotoMoreCommentsButton.removeEventListener('click', renderMoreComments);
  clearRenderedComments();
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhoto();
    clearRenderedComments();
  }
}

export { openPhoto, closePhoto };
