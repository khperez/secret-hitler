$(document).ready(function() {
    $('.partybtn').on('click',function(){
        console.log('search');
        if ($('h1.icon.hidden').length == 2) {
            $('.partyname').removeClass('hidden');
            $('.partyname').addClass('visible');
        } else {
            $('.partyname').removeClass('visible');
            $('.partyname').addClass('hidden');
        }

    });
    $('.charbtn').on('click',function(){
        console.log('user');
        if ($('h1.icon.hidden').length == 2) {
            $('.charname').removeClass('hidden');
            $('.charname').addClass('visible');
        } else {
            $('.charname').removeClass('visible');
            $('.charname').addClass('hidden');
        }
    });
    $('.votebtn').on('click',function(){
        console.log($('vote'));
    });
});