import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryItem = [
  {
    smallImage: "small-image1.jpg",
    largeImage: "large-image1.jpg",
    description: "Image 1 description",
  },
  {
    smallImage: "small-image2.jpg",
    largeImage: "large-image2.jpg",
    description: "Image 2 description",
  },
];

function renderGallery() {
  const galleryContainer = document.querySelector(".gallery");

  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.largeImage;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.smallImage;
    image.alt = item.description;
    image.dataset.source = item.largeImage;

    link.appendChild(image);
    galleryItem.appendChild(link);
    galleryContainer.appendChild(galleryItem);
  });
}

document.querySelector(".gallery").addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName === "IMG") {
    const source = event.target.dataset.source;

    const lightbox = basicLightbox.create(`
        <img src = "${source}" alt = "Image description">`);

    lightbox.show();
  }
});

renderGallery();
