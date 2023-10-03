var iconMenu = document.querySelectorAll('.icon-menu');

iconMenu[0].addEventListener('click',()=>{
    let menu = document.getElementById('menu');
    if(menu.classList.contains('hide')){
        menu.classList.add('show');
        menu.classList.remove('hide');
    }else{
        menu.classList.add('hide');
        menu.classList.remove('show');
    }
})

$('nav a').click(function(){
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top;

    $('html,body').animate({'scrollTop':offSetTop});

    return false;
})

$('nav.mobile i').click(function(){
    var el = $(this).parent().find('ul');
    if(el.is(':visible') ==false){
        el.fadeIn();
    }else{
        el.fadeOut();
    }
})
