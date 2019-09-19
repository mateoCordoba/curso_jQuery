$(document).ready(function(){


    $('#p1').mousemove(function(){
        $('#p1').css({
            'background':'black',
            'color':'white'
        });


        
    });
    $('#p1').click(function(){
        $('#p1').css({
            'background':'blue',
            'color':'white',
            'font-family':'courier',
            'font-size':'18px'
        });


        
        
    });
    $('#p1').mouseout(function(){
        $('#p1').css({
            'background':'yellow',
            'color':'green'
        });
        
    });
    
    $('#p2').mousemove(function(){
        $('#p2').css({
            'background':'teal',
            'color':'black'
        });
    });
    $('#p2').mouseout(function(){
        $('#p2').css({
            'background':'grey',
            'color':'orange'
        });
    });
});