import axios from 'axios';

/// TODO: Implementar constantes de configuração
const baseUrl = 'https://api.themoviedb.org/';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjVjZjM1ZTg4MTE1ODg2MDNlOTA2ODFmZTI1NGIzMSIsInN1YiI6IjY1ZmRjZjQ1MzUyMGU4MDE2NWQ1YWYwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cih6dw7DKQwpVVt6xuxCVEEYGOVi8EEtbQO6xarT8iw';
const authorizationType = 'Bearer';

function getDataTmdb({ endpoint, onSuccess, onError, onFinally }) {
  return axios
    .get(baseUrl + endpoint, {
      headers: {
        Authorization: `${authorizationType} ${token}`,
      },
    })
    .then((success) => onSuccess(success))
    .catch((error) => onError(error));
}

export default getDataTmdb;
