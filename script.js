const imgButton = document.getElementById(`image-button`);
const imaged = document.querySelector(`.imaged`);
let isTurned = false;
imgButton.addEventListener(`click`, () => {
  isTurned = true;
  imaged.src = `https://res.cloudinary.com/dk10vcfuz/image/upload/v1777829383/IMG_20250622_121528_304_gwtrys.jpg`;
  setTimeout(() => {
    imgButton.style.animationPlayState = `running`;
  }, 1000);
});
