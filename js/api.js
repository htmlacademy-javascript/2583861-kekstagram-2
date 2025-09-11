import { BASE_URL, Route, Method, ErrorText } from './const';

const loadData = async (route, method = Method.GET, body = null) => {
  const responce = await fetch(`${BASE_URL}${route}`, {
    method: method,
    body: body
  });
  return responce.ok ? await responce.json() : Promise.reject(ErrorText[method]);
};

const getPhotosFromServer = async () => await loadData(Route.GET_DATA);
const uploadPhotoToServer = async (photoFormData) => await loadData(Route.SEND_DATA, Method.POST, photoFormData);

export { getPhotosFromServer, uploadPhotoToServer };
