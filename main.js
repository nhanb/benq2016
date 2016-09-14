$(function() {

  $('#trailer-modal').on('shown.bs.modal', function () {
    $("#player").attr('src', 'https://www.youtube.com/embed/LqN2tX3LTJA?rel=0&autoplay=1&showinfo=0&wmode=transparent');
  });

  $("#trailer-modal").on('hidden.bs.modal', function (e) {
    $("#player").attr('src', '');
  });

});
