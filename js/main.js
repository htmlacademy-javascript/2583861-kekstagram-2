import { uploadInputHandler } from './upload-input-handler.js';
import { getPhotosFromServer } from './api.js';
import { showDataErrorMessage } from './data-error-message-actions.js';
import { renderGallery } from './render-gallery';
import { clickPhotoHandler } from './click-photo-handler.js';
import { configFilters } from './config-filters.js';

const bootstrap = async () => {
  uploadInputHandler();
  try {
    const photos = await getPhotosFromServer();
    renderGallery(photos);
    clickPhotoHandler(photos);
    configFilters(photos);
  } catch {
    showDataErrorMessage();
  }
};

bootstrap();
