import { bigPhoto, bigPhotoMoreCommentsButton, bigPhotoCloseButton } from './create-big-photo.js';
import { onDocumentKeydown } from './on-document-actions.js';
import { clearRenderedComments, renderMoreComments } from './render-comments.js';

const openPhoto = () => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePhoto = () => {
  if (!bigPhoto.classList.contains('hidden')) {
    bigPhoto.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
    bigPhotoCloseButton.removeEventListener('click', closePhoto);
    bigPhotoMoreCommentsButton.classList.remove('hidden');
    bigPhotoMoreCommentsButton.removeEventListener('click', renderMoreComments);
    clearRenderedComments();
  }
};

export { openPhoto, closePhoto};
