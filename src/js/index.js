$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#menu_mobile').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    })
})

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});




// função para download do curriculo

function downloadCv() {
    const link = document.createElement('a');
    link.href = '/src/images/CV -Diovani Matos.docx';
    link.download = 'CV -Diovani Matos.docx';
    link.click();
}

ScrollReveal().reveal('#hero', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('#img_home', {
    origin: 'right',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('#about', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('#projects', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

