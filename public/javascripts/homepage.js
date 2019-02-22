$(document).ready(function() {
    $('.partybtn').on('click',function(){
        console.log('search');
        if ($('.partyname').hasClass('hidden')) {
            $('.partyname').removeClass('hidden');
            $('.partyname').addClass('visible');
        } else {
            $('.partyname').removeClass('visible');
            $('.partyname').addClass('hidden');
        }

    });
    $('.charbtn').on('click',function(){
        console.log('user');
        if ($('.charname').hasClass('hidden')) {
            $('.charname').removeClass('hidden');
            $('.charname').addClass('visible');
        } else {
            $('.charname').removeClass('visible');
            $('.charname').addClass('hidden');
        }
    });
    $('.votebtn').on('click',function(){
        console.log('vote');
    });
});