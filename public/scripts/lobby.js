$(document).ready(function () {
    $(".startBtn").on("click", function() {
        window.location = "/game";
    });
    var socket = io();
    socket.on('connect', function() {
        console.log("User connected");
    });
    socket.on('roomName', function(roomName) {
        console.log("Room name " + roomName);
        document.getElementById("roomName").innerHTML = roomName;
    });
});