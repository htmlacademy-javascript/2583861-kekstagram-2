import { bigPhoto, bigPhotoMoreCommentsButton, bigPhotoCloseButton } from './create-big-photo.js';
import { onBigPhotoCloseButtonClick, onMoreCommentsButtonClick, onDocumentKeydown } from './on-event-handlers.js';
import { clearRenderedComments } from './render-comments.js';

const openPhoto = () => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPhotoMoreCommentsButton.addEventListener('click', onMoreCommentsButtonClick);
  bigPhotoCloseButton.addEventListener('click', onBigPhotoCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePhoto = () => {
  if (!bigPhoto.classList.contains('hidden')) {
    bigPhoto.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
    bigPhotoCloseButton.removeEventListener('click', onBigPhotoCloseButtonClick);
    bigPhotoMoreCommentsButton.classList.remove('hidden');
    bigPhotoMoreCommentsButton.removeEventListener('click', onMoreCommentsButtonClick);
    clearRenderedComments();
  }
};

export { openPhoto, closePhoto};
