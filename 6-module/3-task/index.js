/* eslint-disable indent */
import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    const carouselSlider = createElement(`
    <div class="carousel">

      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">

      ${this.slides.map(slide => `<div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`).join('')
      }
    </div>
   `);

    this.elem = carouselSlider;

    const rightButton = carouselSlider.querySelector('.carousel__arrow_right');
    const leftButton = carouselSlider.querySelector('.carousel__arrow_left');
    const slidesBlock = carouselSlider.querySelector('.carousel__inner');
    const allImages = carouselSlider.querySelectorAll('.carousel__img');
    const image = carouselSlider.querySelector('.carousel__img');

    let positionCount = 0;
    let translateCount = 0;
    leftButton.style.display = 'none';

    rightButton.addEventListener('click', () => {
      positionCount += 1;
      translateCount += -slidesBlock.offsetWidth;
      rightButton.style.display = '';
      leftButton.style.display = '';

      if (positionCount === (allImages.length - 1)) {
        rightButton.style.display = 'none';
      }

      slidesBlock.style.transform = `translateX(${translateCount}px)`;
    });

    leftButton.addEventListener('click', () => {
      positionCount -= 1;
      translateCount += image.offsetWidth;
      rightButton.style.display = '';
      leftButton.style.display = '';

      if (positionCount === 0) {
        leftButton.style.display = 'none';
      }

      slidesBlock.style.transform = `translateX(${translateCount}px)`;
    });


    let carouselButton = carouselSlider.querySelectorAll('.carousel__button');
    for (let i = 0; i < carouselButton.length; i++) {
      carouselButton[i].addEventListener('click', () => {
        carouselButton[i].dispatchEvent(new CustomEvent('product-add', {
          detail: slides[i].id,
          bubbles: true
        })
        );
      });
    }
  }
}
