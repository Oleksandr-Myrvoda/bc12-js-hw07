import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  gallery: document.querySelector(".gallery"),
};

const elements = galleryItems
  .map(({ original, preview, description }) => {
    const imagesItem = `<a class="gallery__item" href='${original}'> 
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    return imagesItem;
  })
  .join("");
refs.gallery.insertAdjacentHTML("beforeend", elements);
//   ========= library options for gallery
new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});

const onGalleryClick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery")) return;
};

refs.gallery.addEventListener("click", onGalleryClick);

console.log(galleryItems);
// ==================================================
// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.
