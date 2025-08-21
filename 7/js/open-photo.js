import { photos } from './render-photos.js';
import { photosContainer } from './render-photos.js';
import { bigPhoto, bigPhotoCloseButton } from './render-big-photo.js';
import { renderBigPhoto } from './render-big-photo.js';

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPhoto.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
}

const openPhoto = () => {
  bigPhoto.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.classList.add('modal-open');
};

const closePhoto = () => {
  bigPhoto.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
};

photosContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    openPhoto();
    const currentPhoto = photos.find((element) => element.id === Number(evt.target.dataset.id));
    renderBigPhoto(currentPhoto);
  }
  bigPhotoCloseButton.addEventListener('click', closePhoto);
});
