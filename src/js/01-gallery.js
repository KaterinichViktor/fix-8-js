// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import { galleryItems } from './gallery-items.js';

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true, 
  captionSelector: 'img', 
  captionType: 'attr', 
  captionsData: 'alt',
  captionDelay: 250, 
});