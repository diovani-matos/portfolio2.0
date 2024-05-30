$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#menu_mobile').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    })
})