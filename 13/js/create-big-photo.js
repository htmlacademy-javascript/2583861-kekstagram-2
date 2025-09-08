import { renderComments, renderMoreComments } from './render-comments.js';

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoImage = bigPhoto.querySelector('img');
const bigPhotoLikesCount = bigPhoto.querySelector('.likes-count');
const bigPhotoCommentsList = bigPhoto.querySelector('.social__comments');
const bigPhotoMoreCommentsButton = bigPhoto.querySelector('.comments-loader');
const bigPhotoDescription = bigPhoto.querySelector('.social__caption');
const bigPhotoCloseButton = bigPhoto.querySelector('.big-picture__cancel');

const createBigPhoto = ({url, description, likes, comments}) => {
  bigPhotoImage.src = url;
  bigPhotoLikesCount.textContent = likes;
  bigPhotoDescription.textContent = description;
  bigPhotoCommentsList.innerHTML = '';
  renderComments(comments);
  bigPhotoMoreCommentsButton.addEventListener('click', renderMoreComments);
};

export { bigPhoto, bigPhotoCommentsList, bigPhotoMoreCommentsButton, bigPhotoCloseButton };
export { createBigPhoto };
