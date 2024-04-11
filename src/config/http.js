import axios from 'axios';

export async function getDataTmdb({ endpoint, onSuccess, onError }) {
  return axios
    .get(`${process.env.REACT_APP_HTTP_BASE_URL_API}${endpoint}`, {
      headers: {
        Authorization: `${process.env.REACT_APP_HTTP_AUTHORIZAITON_BEARER} ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
    .then((success) => onSuccess(success))
    .catch((error) => onError(error));
}
