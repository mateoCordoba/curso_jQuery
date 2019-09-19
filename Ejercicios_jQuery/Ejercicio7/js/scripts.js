$(document).ready(function(){
    $('p').each(function(){
        let p = $(this);
        if(p.text().length<100){
            p.css({
                'background-color':'grey',
                'color':'yellow',
                'font-size':'18',
                'border-radius':'7px'

            });
        }else{
            p.css({
                'background-color':'black',
                'color':'purple',
                'font-size':'18',
                'border-radius':'7px'
            });
        
        }
    });
});