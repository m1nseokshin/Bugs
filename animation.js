$(function() {
    $('.search').on('click', function(event){
        event.preventDefault();
            
        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible');
        $('.background').toggleClass('visible');
        $('body').toggleClass('active');
        $('.headerbg').toggleClass('active');
    });

});

$(function() {
    $('.background').on('click', function(event){
        event.preventDefault();
            
        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible');
        $('.background').toggleClass('visible');
        $('body').toggleClass('active');
        $('.headerbg').toggleClass('active');
    });

});

