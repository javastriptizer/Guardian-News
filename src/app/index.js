import './assets/styles/main.scss';
import guardianApi from './api';

const btnRefresh = document.querySelector('.refresh');
const newsList = document.querySelector('.news');

async function searchNews(query = '') {
  const response = await guardianApi.get(`/search?q=${query}`);

  return response.results;
}

function renderNews(news) {
  return news
    .map(({ webTitle }) => `<li class="news-list_item">${webTitle}</li>`)
    .join('');
}

async function displayNews() {
  try {
    const news = await searchNews();

    newsList.innerHTML = renderNews(news);
  } catch (e) {
    newsList.innerHTML = `<div class="error">${e.message}</div>`;
  }
}

displayNews();

btnRefresh.addEventListener('click', () => displayNews());
