import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  hideLoader,
  showLoader,
} from './js/render-functions.js';

/** @type {HTMLFormElement}  */
const form = document.querySelector('.form');

form.addEventListener('submit', searchImg);

function searchImg(event) {
  event.preventDefault();

  const searchBy = form.elements['search-text'].value.trim();

  if (searchBy === '') {
    iziToast.error({
      title: 'Empty field',
      message: 'Please enter a value before submitting.',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchBy)
    .then(data => {
      console.log(data.hits);

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
    })
    .catch(errorMessage => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: `${errorMessage}`,
      });
    })
    .finally(() => {
      hideLoader();
    });
}
