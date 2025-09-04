import { photosContainer } from './render-gallery.js';
import { createBigPhoto, bigPhotoCloseButton } from './create-big-photo.js';
import { openPhoto, closePhoto } from './photo-actions.js';

const clickPhotoHandler = (photos) => photosContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    openPhoto();
    bigPhotoCloseButton.addEventListener('click', closePhoto);
    const currentPhoto = photos.find((element) => element.id === Number(evt.target.dataset.id));
    createBigPhoto(currentPhoto);
  }
});

export { clickPhotoHandler };
