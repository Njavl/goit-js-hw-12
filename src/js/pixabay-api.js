import axios from 'axios';

const API_KEY = '54431760-457b05627b7c92a0f6d8a1d9a';
const url = 'https://pixabay.com/api';

export default async function getImagesByQuery(query, page) {
  const option = {
    method: 'GET',
    url: url,
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };

  try {
    const response = await axios(option);
    return response.data;
  } catch (error) {
    throw error;
  }
}
