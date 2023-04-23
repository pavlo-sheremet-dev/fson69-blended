import axios from 'axios';

const API_KEY = '563492ad6f91700001000001639cabac73c74accb94b7bf7858095a0';
axios.defaults.baseURL = 'https://api.pexels.com/v1';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = (query, page) => {
  return axios.get('/search', { params: { query, page } }).then(response => {
    const { total_results, photos } = response.data;
    const images = photos.map(({ id, avg_color, alt, src }) => ({
      id,
      avg_color,
      alt,
      src: src.medium,
    }));
    return { total_results, images };
  });
};
