import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

const elements = galleryItems
  .map(({ original, preview, description }) => {
    const imagesItem = `<div class="gallery__item"> 
        <a class="gallery__link" 
            href='${original}'>
            <img class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt= '${description}'
            />
        </a>
    </div>`;
    return imagesItem;
  })
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", elements);

// ========= library modal  =======
let instance = null;
const onGalleryClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  const original = e.target.dataset.source;
  instance = basicLightbox.create(`
  <img src="${original}" width="800" height="600">
`);
  instance.show();
};

refs.gallery.addEventListener("click", onGalleryClick);
// ===========esc close modal with library===================
window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    instance?.close();
  }
  return;
});
// ==================================================
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
