document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const images = document.querySelectorAll(".photos img");

  let loadedImages = 0;
  const totalImages = images.length;

  if (totalImages === 0) {
    loader.classList.add("hide");
    return;
  }

  images.forEach(img => {
    if (img.complete) {
      imageLoaded();
    } else {
      img.addEventListener("load", imageLoaded);
      img.addEventListener("error", imageLoaded);
    }
  });

  function imageLoaded() {
    loadedImages++;
    if (loadedImages === totalImages) {
      loader.classList.add("hide");
    }
  }
});
