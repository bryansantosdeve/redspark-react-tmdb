import axios from 'axios';

/// TODO: Implementar constantes de configuração em um .env
const baseUrl = 'https://api.themoviedb.org/';
const token = ''; // Sua chave da Api inserida aqui
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
