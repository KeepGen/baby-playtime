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

});