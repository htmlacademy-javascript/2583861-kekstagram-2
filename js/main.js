import { getData } from './api.js';
import { renderGallery } from './render-gallery';
import { showDataErrorMessage } from './data-error-message-actions.js';

getData(renderGallery, showDataErrorMessage);
