import {createPhotosArray} from './create-photos-array.js';

const photos = createPhotosArray();

const photosContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosListFragment = document.createDocumentFragment();

photos.forEach(({url, description, likes, comments}) => {
  const newPhoto = photoTemplate.cloneNode(true);
  newPhoto.querySelector('.picture__img').src = url;
  newPhoto.querySelector('.picture__img').alt = description;
  newPhoto.querySelector('.picture__likes').textContent = likes;
  newPhoto.querySelector('.picture__comments').textContent = comments.length;
  photosListFragment.append(newPhoto);
});

photosContainer.append(photosListFragment);
