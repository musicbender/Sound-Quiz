$(document).ready(function(){
    
    $('.start-btn').click(function(){
        $('.start-btn').fadeOut(750, function(){
            $('.progress').fadeIn(750);
            $('.audio-section').fadeIn(750);
            $('.answers').fadeIn(750, function(){
                $('.progress').fadeTo(750, 1);
            });
        });

    });
    
    
    
});