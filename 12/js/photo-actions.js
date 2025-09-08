import { bigPhoto, bigPhotoMoreCommentsButton, bigPhotoCloseButton } from './create-big-photo.js';
import { onBigPhotoKeydown } from './on-element-actions.js';
import { clearRenderedComments, renderMoreComments } from './render-comments.js';

const openPhoto = () => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onBigPhotoKeydown);
};

const closePhoto = () => {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPhotoKeydown);
  bigPhotoCloseButton.removeEventListener('click', closePhoto);
  bigPhotoMoreCommentsButton.classList.remove('hidden');
  bigPhotoMoreCommentsButton.removeEventListener('click', renderMoreComments);
  clearRenderedComments();
};

export { openPhoto, closePhoto};
