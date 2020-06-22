
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
    })

    $(".pricing-item-click").click(function() {
        $(".pricing-item-click").removeClass('active')
        $(this).addClass('active')
    });

    $(".collapse-button").click(function () {
        $(this).toggleClass('show')
        $('.collapse-content').slideToggle()

    });
});
