import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = createGallery(galleryItems);
// const cardMarkup = createGallery(galleryItems);

// galleryEl.insertAdjacentHTML('afterbegin', cardMarkup);

function createGallery(array) {
    return array.map(({ preview, original, description }) => {
        return `<a class="gallery__item"  href="${original}">
    <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
    }).join('');
};

const simpleLightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

// console.log(galleryItems);
