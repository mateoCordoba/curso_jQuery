$(document).ready(function(){
    $("#menu a").click(function(){
        var target = $(this).attr("href");
        $('#detalles').load(target);
        $('#detalles').ajaxSuccess(function(){
            $(this).css({
                'background':'black',
                'color':'white'
            });
        });
        return false;
    });

});
