const $tab = $('.tab');

$tab.click(function(){

    $(this).next().slideToggle();

});