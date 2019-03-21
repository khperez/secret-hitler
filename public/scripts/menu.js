$(document).ready(function() {
    $("i.fa.fa-bars.fa-2x").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
    $(".title.create").on("click", function() {
        window.location = "/"
    });
  
});