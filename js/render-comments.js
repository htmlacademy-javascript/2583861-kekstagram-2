import { bigPhotoCommentsList, bigPhotoMoreCommentsButton } from './render-big-photo';

const bigPhotoComment = document.querySelector('.social__comment');
const bigPhotoCommentShownCount = document.querySelector('.social__comment-shown-count');
const bigPhotoCommentTotalCount = document.querySelector('.social__comment-total-count');

let commentsArrayFirstIndex = 0;
let shownCommentsCount = 0;
let openedPhotoComments = [];
const commentsFragment = document.createDocumentFragment();

const createCommentsFragment = ({avatar, name, message}) => {
  const newComment = bigPhotoComment.cloneNode(true);
  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;
  commentsFragment.append(newComment);
};

const clearComments = () => {
  commentsArrayFirstIndex = 0;
  shownCommentsCount = 0;
  bigPhotoMoreCommentsButton.classList.add('hidden');
};

const renderMoreComments = () => {
  const COMMENTS_COUNT_TO_RENDER = 5;
  const commentsToRender = openedPhotoComments.slice(commentsArrayFirstIndex, commentsArrayFirstIndex + COMMENTS_COUNT_TO_RENDER);
  commentsToRender.forEach(createCommentsFragment);
  bigPhotoCommentsList.append(commentsFragment);

  shownCommentsCount += commentsToRender.length;
  bigPhotoCommentShownCount.textContent = shownCommentsCount;
  bigPhotoCommentTotalCount.textContent = openedPhotoComments.length;
  commentsArrayFirstIndex += COMMENTS_COUNT_TO_RENDER;

  if (shownCommentsCount === openedPhotoComments.length) {
    clearComments();
  }
};

const renderComments = (comments) => {
  openedPhotoComments = comments;
  renderMoreComments();
};

export { clearComments, renderComments, renderMoreComments };
