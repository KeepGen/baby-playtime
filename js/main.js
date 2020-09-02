$(document).ready(function () {

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal(event) {
    event.preventDefault();
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
    $('html').addClass('hide');
    $('body').addClass('hide');
    $('.navbar__mobile_fixed').addClass('hide');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
    $('html').removeClass('hide');
    $('body').removeClass('hide');
    $('.navbar__mobile_fixed').removeClass('hide');
  }

  $(document).keyup(function (event) {
    if (event.which == '27') {
      $('.modal__overlay').removeClass('modal__overlay_visible');
      $('.modal__dialog').removeClass('modal__dialog_visible');
      $('html').removeClass('hide');
      $('body').removeClass('hide');
      $('.navbar__mobile_fixed').removeClass('hide');
    }
  });


  // Connecting slider
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
    },
    loopedSlides: 1,
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loopedSlides: 1,

  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;


  // Connecting Accordion
  var header = $('.accordion-header');

  function accordion() {
    $(this).toggleClass('active');
    $(this).next().slideToggle('normal');
  }

  header.click(accordion);

});