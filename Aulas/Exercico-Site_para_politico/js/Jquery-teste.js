$('document').ready(function(){


    $('div#noticias ,a').on('click',function(){   
        if ($('a#noticia1').is('hidden')) {
            $('#n1').attr('class','col-md-10 col-xs-2 mx-auto bg-danger p-2 d-block order-first')
            $('#n2').attr('class', 'col-md-10 col-xs-2 mx-auto bg-danger p-2 d-block order-last')
        } else {
            $('#n1').attr('class', 'col-md-10 col-xs-2 mx-auto bg-danger p-2 d-block order-last')
            $('#n2').attr('class', 'col-md-10 col-xs-2 mx-auto bg-danger p-2 d-block order-first')
        }

        
    });

});