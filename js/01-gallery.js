import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const cardMarkup = createLi(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', cardMarkup);
galleryEl.addEventListener('click', onGalleryElClick);
// window.addEventListener('keydown', onEscKeyPress);

function createLi(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="./gallery-items.js">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    }).join('');
}
function onGalleryElClick(e) {
    e.preventDefault();
    const { target } = e;

    if (target.nodeName !== "IMG") {
        return
    }
    const instance = basicLightbox.create(`
        <img src='${target.dataset.source}' width="800" height="600">
    `)
  instance.show();

  window.addEventListener('keydown', onEscKeyPress);

  function onEscKeyPress(e) {
    if (e.code === "Escape") {
        instance.close();
    }
  };
};

console.log(galleryItems);