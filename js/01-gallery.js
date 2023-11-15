import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector(".gallery");
let imageModule;

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
        </a>
      </li>`
  )
  .join("");
imageContainer.insertAdjacentHTML("beforeend", markup);

function onClick(evt) {
  evt.preventDefault();
  const targetImage = evt.target;
  if (!targetImage.classList.contains("gallery__image")) {
    return;
  }
  const currentImage = targetImage.dataset.source;
  const currentImageDescription = targetImage.getAttribute("alt");

  imageModule = basicLightbox.create(
    `<img src="${currentImage}" alt="${currentImageDescription}">`
  );

  imageModule.show();
}

function onEscape(evt) {
  if (evt.code === "Escape") {
    imageModule.close();
  }
}

imageContainer.addEventListener("click", onClick);
imageContainer.addEventListener("keydown", onEscape);
