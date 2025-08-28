import { photos } from './render-photos.js';
import { photosContainer } from './render-photos.js';
import { openPhoto, closePhoto } from './user-actions.js';
import { renderComments, renderMoreComments } from './render-comments';

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoCloseButton = bigPhoto.querySelector('.big-picture__cancel');
const bigPhotoImage = bigPhoto.querySelector('img');
const bigPhotoLikesCount = bigPhoto.querySelector('.likes-count');
const bigPhotoCommentsList = bigPhoto.querySelector('.social__comments');
const bigPhotoMoreCommentsButton = bigPhoto.querySelector('.comments-loader');
const bigPhotoDescription = bigPhoto.querySelector('.social__caption');

const createBigPhoto = ({url, description, likes, comments}) => {
  bigPhotoImage.src = url;
  bigPhotoLikesCount.textContent = likes;
  bigPhotoDescription.textContent = description;
  bigPhotoCommentsList.innerHTML = '';
  renderComments(comments);
  bigPhotoMoreCommentsButton.addEventListener('click', renderMoreComments);
};

const renderBigPhoto = () => photosContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    openPhoto();
    const currentPhoto = photos.find((element) => element.id === Number(evt.target.dataset.id));
    createBigPhoto(currentPhoto);
  }
  bigPhotoCloseButton.addEventListener('click', closePhoto);
});

export { bigPhoto, bigPhotoCommentsList, bigPhotoMoreCommentsButton };
export { renderBigPhoto };
