$(document).ready(function(){
    
    var quizNum = 1,
        audioNum = 1;
    
    //Click Start Button
    $('.start-btn').click(function(){
        $('.start').fadeOut(750);
        $('.start-btn').fadeOut(750, function(){
            $('.progress').fadeIn(750);
            $('.audio-section').fadeIn(750);
            $('.audio-1').fadeIn(750);
            $('.answers').fadeIn(750);
            $('.group-1').fadeIn(750, function(){
                $('.progress').fadeTo(750, 1);
            });
        });
    });
    
    //Click on answerbox to reveal right answer and move to the next
    
    $('.answer-box').click(function(){
        
        //change answer boxes and show correct answer
        console.log(quizNum);
        $('.group-' + quizNum + ' .correct').addClass('correct-reveal');
        $('.group-' + quizNum + ' .wrong').fadeTo(1000, 0);
        $('.group-' + quizNum).delay(1000).fadeOut(1000).delay(1000, function(){
            quizNum++;
            $('.group-' + quizNum).fadeIn(1000);
            console.log(quizNum);
        });
        
        //change sound
        $('.audio-' + audioNum).hide();
        audioNum++
        $('.audio-' + audioNum).css('display', 'inline');
        
        $('.num-change').html('<span class="num-change>' + quizNum + '</span>');
    });
    
    
    //Hover effect for Answer-Box
    $('.answer-box').mouseenter(function(){
        $(this).addClass('answer-box-hover');
    });
    $('.answer-box').mouseleave(function(){
        $(this).removeClass('answer-box-hover');
    });
    
    
    
    
    
    
    
    
});