import { DEBOUNCE_DELAY_TIME } from './const';
import { getRandomNumber } from './utils';
import { renderGallery } from './render-gallery';
import { debounce } from './utils';

const filterElement = document.querySelector('.img-filters');
const debounceRender = debounce(renderGallery, DEBOUNCE_DELAY_TIME);

let pictures = [];
let currentFilter = 'filter-default';

const applyFilter = () => {
  let filteredPictures = [];
  if (currentFilter === 'filter-default') {
    filteredPictures = pictures;
  }
  if (currentFilter === 'filter-random') {
    filteredPictures = pictures.toSorted(() => 1 - getRandomNumber(0, 2)).slice(0, 10);
  }
  if (currentFilter === 'filter-discussed') {
    filteredPictures = pictures.toSorted((a, b) => b.comments.length - a.comments.length);
  }
  debounceRender(filteredPictures);
};

const onFilterClick = (evt) => {
  const activeButton = document.querySelector('.img-filters__button--active');
  if (!evt.target.matches('button') || activeButton === evt.target) {
    return;
  }
  activeButton.classList.toggle('img-filters__button--active');
  evt.target.classList.toggle('img-filters__button--active');
  currentFilter = evt.target.getAttribute('id');
  applyFilter();
};

const configFilters = (photos) => {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterClick);
  pictures = photos;
};

export {configFilters};
