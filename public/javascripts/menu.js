$('#plusButton').click(function () {
    $('.plusVer').toggleClass('plusVer_active');
    $('.picture').toggleClass('picture_up');
    $('.options').toggle();
    $('.options').toggleClass('options_show');
    $('.nav_btns').toggleClass('nav_btns_hide');
  });

  $(document).ready(function() {
    $("i.fa.fa-bars.fa-2x").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
    
  });