import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

/** @type {HTMLUListElement} */
const gallery = document.querySelector('.gallery');

const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images.map(photo => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = photo;

    return `
    <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
    <img
    class="gallery-image"
    src="${webformatURL}"
    alt="${tags}"
    />
        <div class="description">
      <ul class="description-list">
        <li class="description-list-item">
          <span class="description-label">Likes</span>
          <span class="description-label-value">${likes}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Views</span>
          <span class="description-label-value">${views}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Comments</span>
          <span class="description-label-value">${comments}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Downloads</span>
          <span class="description-label-value">${downloads}</span>
        </li>
      </ul>
    </div>
    </a>
    </li>
    `;
  });

  gallery.insertAdjacentHTML('afterbegin', markup.join(''));

  const modal = new SimpleLightbox(`.gallery li a`, {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

  modal.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('visually-hidden');
}

export function hideLoader() {
  loader.classList.add('visually-hidden');
}
