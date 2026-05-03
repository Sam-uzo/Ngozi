const imgButton = document.getElementById(`image-button`);
const imaged = document.querySelector(`.imaged`);
let isTurned = false;

async function imgGotten() {
  let img = await fetch(
    `https://res.cloudinary.com/dk10vcfuz/image/upload/v1777829383/IMG_20250622_121528_304_gwtrys.jpg`,
  );
  let img2 = await fetch(
    `https://res.cloudinary.com/dk10vcfuz/image/upload/v1777829383/IMG_20250330_095903_216_i31yyd.jpg`,
  );
  return [img.url, img2.url];
}

imgButton.addEventListener(`click`, () => {
  if (isTurned == false) {
    imgGotten().then((result) => {
      imgButton.style.animationPlayState = `running`;
      setTimeout(() => {
        imaged.src = `${result[0]}`;
      }, 900);
      setTimeout(() => {
        imgButton.style.animationPlayState = `paused`;
      }, 1000);
    });
    isTurned = true;
  } else {
    imgGotten().then((result) => {
      imgButton.style.animationPlayState = `running`;
      setTimeout(() => {
        imaged.src = `${result[1]}`;
      }, 1000);
      setTimeout(() => {
        imgButton.style.animationPlayState = `paused`;
      }, 1000);
      isTurned = false;
    });
  }
});
