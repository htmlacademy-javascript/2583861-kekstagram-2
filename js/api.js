const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data/',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные! Попробуйте еще раз',
  [Method.POST]: 'Не удалось отправить данные формы'
};

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
