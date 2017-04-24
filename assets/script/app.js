$(document).ready(function(){
  $('.ui.dropdown').dropdown();

  $('.post-detail').click(function(){
    $('.ui.modal').modal('show');
  });

  $('.menu #notification').popup({
    on: 'click',
    lastResort: 'bottom right',
    onShow: function(){
            resizePopup();
        },
  });

  // Function for resizing popup
  var resizePopup = function(){$('.ui.popup').css('max-height', $(window).height());};

  $(window).resize(function(e){
      resizePopup();
  });
});