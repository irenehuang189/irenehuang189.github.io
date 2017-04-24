$(document).ready(function(){
  $('.ui.dropdown').dropdown();

  $('.post-detail').click(function(){
    $('.modal#post-detail').modal('show');
  });

  $('a#new-post').popup({
    selector  : {
      popup: '.popup#new-post'
    },
    on: 'click',
    position: 'bottom right',
  });

  $('.menu #notification').popup({
    selector: {
      popup: '.popup#notification'
    },
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