function initCarousel() {
  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelector('.carousel__inner');
  const image = document.querySelector('.carousel__img');
  let positionCount = 0;
  let translateCount = 0;
  let imageWidth = image.offsetWidth;
  leftButton.style.display = 'none';

  rightButton.addEventListener('click', () => {
    positionCount += 1;
    translateCount += -imageWidth;
    rightButton.style.display = '';
    leftButton.style.display = '';

    if (positionCount === 3) {
      rightButton.style.display = 'none';
    }

    slides.style.transform = `translateX(${translateCount}px)`;
  });

  leftButton.addEventListener('click', () => {
    positionCount -= 1;
    translateCount += imageWidth;
    rightButton.style.display = '';
    leftButton.style.display = '';

    if (positionCount === 0) {
      leftButton.style.display = 'none';
    }

    slides.style.transform = `translateX(${translateCount}px)`;
  });
}
