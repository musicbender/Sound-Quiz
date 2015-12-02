$(document).ready(function(){
    
    //Click Start Button
    $('.start-btn').click(function(){
        $('.start').fadeOut(750);
        $('.start-btn').fadeOut(750, function(){
            $('.progress').fadeIn(750);
            $('.audio-1').fadeIn(750);
            $('.answers').fadeIn(750);
            $('.group-1').fadeIn(750, function(){
                $('.progress').fadeTo(750, 1);
            });
        });
    });
    
    $('.answer-box').mouseenter(function(){
        $(this).addClass('answer-box-hover');
    });
    
    $('.answer-box').mouseleave(function(){
        $(this).removeClass('answer-box-hover');
    });
    
    
    
    
    
    
    
    
});