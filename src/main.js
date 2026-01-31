import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  hideLoader,
  showLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

/** @type {HTMLFormElement}  */
const form = document.querySelector('.form');
/** @type {HTMLButtonElement}  */
const loadMoreBtn = document.querySelector('.load-more');

let searchBy = '';
let page = 1;

form.addEventListener('submit', searchImg);
loadMoreBtn.addEventListener('click', loadMore);

async function searchImg(event) {
  event.preventDefault();

  searchBy = form.elements['search-text'].value.trim();
  page = 1;

  if (searchBy === '') {
    iziToast.error({
      title: 'Empty field',
      message: 'Please enter a value before submitting.',
    });
    return;
  }

  clearGallery();
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(searchBy);
    console.log(data);

    if (data.hits.length === 0) {
      hideLoader();
      iziToast.error({
        title: 'Nothing found',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    hideLoader();
    createGallery(data.hits);

    checkForEnd(data);
  } catch (errorMessage) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: `${errorMessage}`,
    });
  }
}

async function loadMore(event) {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchBy, page);
    console.log(data);

    hideLoader();
    createGallery(data.hits);

    checkForEnd(data);
  } catch (errorMessage) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: `${errorMessage}`,
    });
  }
}

function checkForEnd(data) {
  if (page >= Math.ceil(data.totalHits / 15)) {
    hideLoadMoreButton();
    iziToast.warning({
      title: 'No more results',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showLoadMoreButton();
  }
}
