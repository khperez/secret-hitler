$(document).ready(function() {
    $('.partybtn').on('click',function(){
        console.log('search');
        if ($('.icon.hidden').length == 3) {
            $('.partyname').removeClass('hidden');
            $('.partyname').addClass('visible');
        }
        else {
            $('.partyname').removeClass('visible');
            $('.partyname').addClass('hidden');
        }
    });
    $('.charbtn').on('click',function(){
        console.log('user');
        if ($('.icon.hidden').length == 3) {
            $('.charname').removeClass('hidden');
            $('.charname').addClass('visible');
        } else {
            $('.charname').removeClass('visible');
            $('.charname').addClass('hidden');
        }
    });
    $('.votebtn').on('click',function(){
        if ($('.icon.hidden').length == 3) {
            $('.voting').removeClass('hidden');
            $('.voting').addClass('visible');
        } else {
            $('.voting').removeClass('visible');
            $('.voting').addClass('hidden');
        }
    });
});