import { photos } from './create-photos-array.js';

const photosContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosListFragment = document.createDocumentFragment();

const createListFragment = ({id, url, description, likes, comments}) => {
  const newPhoto = photoTemplate.cloneNode(true);
  newPhoto.querySelector('.picture__img').dataset.id = id;
  newPhoto.querySelector('.picture__img').src = url;
  newPhoto.querySelector('.picture__img').alt = description;
  newPhoto.querySelector('.picture__likes').textContent = likes;
  newPhoto.querySelector('.picture__comments').textContent = comments.length;
  photosListFragment.append(newPhoto);
};

const renderPhotos = (photosArray) => {
  photosArray.forEach(createListFragment);
  photosContainer.append(photosListFragment);
};

renderPhotos(photos);

export { photos, photosContainer };
