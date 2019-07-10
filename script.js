$(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 20}, 800);
    });
});

$(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('.click_top').show();
        $('.click_top').css("display", "flex")
    });
})

$(document).ready(function($) {
    $(".click_top").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});

function openNav() {
    document.getElementById('mobile_menu').style.width = "100%"
}

function closeNav() {
    document.getElementById('mobile_menu').style.width = "0"
}

function activateTopButton() {
    document.getElementById('top_btn').style.display = 'flex'
}

function goToTopOfPage() {
    document.getElementById('top_btn').style.display = 'none'
}