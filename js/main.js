import { uploadInputHandler } from './upload-input-handler.js';
import { getPhotosFromServer } from './api.js';
import { renderGallery } from './render-gallery';
import { clickPhotoHandler } from './click-photo-handler.js';
import { setFilters } from './set-filters.js';
import { showDataErrorMessage } from './data-error-message-actions.js';

const bootstrap = async () => {
  uploadInputHandler();
  try {
    const photos = await getPhotosFromServer();
    renderGallery(photos);
    clickPhotoHandler(photos);
    setFilters(photos);
  } catch {
    showDataErrorMessage();
  }
};

bootstrap();
