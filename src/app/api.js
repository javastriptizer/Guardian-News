import axios from 'axios';

const API_KEY = '6b9a50cb-ea3b-44d5-96da-f3fe3a11c6e8';

const guardianApi = axios.create({ baseURL: ' https://content.guardianapis.com' });

guardianApi.interceptors.request.use((config) => {
  const { url } = config;

  const apiKeyQuery = url.includes('?') ? `&api-key=${API_KEY}` : `?api-key=${API_KEY}`;

  return {
    ...config,
    url: `${url}${apiKeyQuery}`,
  };
});

guardianApi.interceptors.response.use((response) => {
  const { data } = response;

  return data.response;
});

export default guardianApi;
