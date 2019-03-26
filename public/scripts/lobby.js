$(document).ready(function () {
    $(".startBtn").on("click", function() {
        window.location = "/game";
    });
    var socket = io();
    socket.on("connect", function() {
        console.log("Your name is: ");
    });
});