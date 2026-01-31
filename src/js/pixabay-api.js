import axios from 'axios';

import { clearGallery, showLoader } from './render-functions.js';

const API_KEY = '54431760-457b05627b7c92a0f6d8a1d9a';
const url = 'https://pixabay.com/api';

export default function getImagesByQuery(query) {
  return axios({
    method: 'GET',
    url: url,
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.dir(error);
      throw error;
    })
    .finally();
}
