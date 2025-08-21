const bigPhoto = document.querySelector('.big-picture');
const bigPhotoCloseButton = bigPhoto.querySelector('.big-picture__cancel');
const bigPhotoImage = bigPhoto.querySelector('img');
const bigPhotoLikesCount = bigPhoto.querySelector('.likes-count');
const bigPhotoCommentCount = bigPhoto.querySelector('.social__comment-count');
const bigPhotoCommentShownCount = bigPhoto.querySelector('.social__comment-shown-count');
const bigPhotoCommentTotalCount = bigPhoto.querySelector('.social__comment-total-count');
const bigPhotoComment = bigPhoto.querySelector('.social__comment');
const bigPhotoCommentsList = bigPhoto.querySelector('.social__comments');
const bigPhotoMoreCommentsButton = bigPhoto.querySelector('.comments-loader');
const bigPhotoDescription = bigPhoto.querySelector('.social__caption');

const commentsFragment = document.createDocumentFragment();

const createCommentsFragment = (commentsArray) => {
  const newComment = bigPhotoComment.cloneNode(true);
  newComment.querySelector('.social__picture').src = commentsArray.avatar;
  newComment.querySelector('.social__picture').alt = commentsArray.name;
  newComment.querySelector('.social__text').textContent = commentsArray.message;
  commentsFragment.append(newComment);
};

const renderBigPhoto = ({url, description, likes, comments}) => {
  bigPhotoImage.src = url;
  bigPhotoLikesCount.textContent = likes;

  bigPhotoCommentShownCount.textContent = comments.length;
  bigPhotoCommentTotalCount.textContent = comments.length;

  comments.forEach(createCommentsFragment);
  bigPhotoCommentsList.innerHTML = '';
  bigPhotoCommentsList.append(commentsFragment);

  bigPhotoDescription.textContent = description;
  bigPhotoCommentCount.classList.add('hidden');
  bigPhotoMoreCommentsButton.classList.add('hidden');
};

export { bigPhoto, bigPhotoCloseButton };
export { renderBigPhoto };
