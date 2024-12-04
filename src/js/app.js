$('.product').slick(
    {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        autoplay: true,
        nextArrow: '<img class="custom-arrow custom-arrow-right" src="./img/arrow.png"></img>',
        prevArrow: '<img class="custom-arrow custom-arrow-left" src="./img/arrow.png"></img>',
      }
);

$('.slick-slider').on('afterChange', function(event, slick, currentSlide) {
  // Сбрасываем стили у всех элементов
  document.querySelectorAll('.slick-slide .product__item').forEach(item => {
    item.style.border = 'none';
  });

  // Применяем стиль к активному элементу
  document.querySelectorAll('.slick-slide.slick-active').forEach(activeSlide => {
    const productItem = activeSlide.querySelector('.product__item');
    if (productItem) {
      productItem.style.border = '1px solid #F06E2D';
    }
  });
});