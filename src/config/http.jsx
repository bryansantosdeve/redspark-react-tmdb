import axios from 'axios';

/// TODO: Implementar constantes de configuração
const baseUrl = 'https://api.themoviedb.org/';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDNhNzAzZGRmM2M3ODg4NmZlMzFkMWJiODQzODljMCIsInN1YiI6IjY1ZmRjZjQ1MzUyMGU4MDE2NWQ1YWYwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DRjIKVYGW1KbtG8FuP3Arvs6V9Uj7kvVBJukvqjLjiU';
const authorizationType = 'Bearer';

function getDataTmdb({ endpoint, onSuccess, onError }) {
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
