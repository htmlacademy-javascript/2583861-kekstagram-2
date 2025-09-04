const getData = (onSuccess, onFail) => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
    .then((responce) => {
      if (!responce.ok) {
        onFail();
      }
      return responce.json();
    })
    .then((photos) => onSuccess(photos))
    .catch(() => onFail());
};

const sendData = (formElement, onSuccess, onFail) => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    body: new FormData(formElement)
  })
    .then((responce) => {
      if (!responce.ok) {
        onFail();
      }
      onSuccess();
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
