let slider = $(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

$('.header__burger').on('click', function(){
  $('.header__burger').toggleClass('active');
  $('.mobile-menu').toggleClass('active');
})

$('.mobile__nav a').on('click', function(){
  $('.header__burger').toggleClass('active');
  $('.mobile-menu').toggleClass('active');
})
$('.radio__input.relatives').on('click', function(){
  $('.registration__form-data-input').toggleClass('active');
  
})