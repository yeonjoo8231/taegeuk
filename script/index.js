$('#nav .openmenu').on('click',function(){
    $(this).toggleClass('on')
    $('#nav .depth1').toggleClass('on')
})
$('#nav .depth1 > li').mouseover('click',function(){
    $(this).find('.depth2').stop().slideDown(500)
})
$('#nav .depth1 > li').mouseout('click',function(){
    $(this).find('.depth2').stop().slideUp(500)
})

// article1
var sct
$(window).scroll(function(){
    sct = $(document).scrollTop()
    if ( sct < 200 ) {
        $('#article1 .txtbox1').removeClass('on')
    }
    if ( sct >= 200 ) {
        $('#article1 .txtbox1').addClass('on')
    }
    if ( sct < 700 & $('#section #article1').hasClass('on') ) {
        $('#section #article1').removeClass('on')
    }
    if ( sct >= 700 & !$('#section #article1').hasClass('on') ) {
        $('#section #article1').addClass('on')
    }
})

// article2
$(window).scroll(function(){
    sct = $(document).scrollTop()
    var wh = $(window).height()
    var arti2top = $('#article2').offset().top - (wh/2)
    
    if ( sct < arti2top & $('#article2 .imgbox2').hasClass('on')) {
        $('#article2 .imgbox2').removeClass('on')
    } else if ( sct >= arti2top & !$('#article2 .imgbox2').hasClass('on') ) {
        $('#article2 .imgbox2').addClass('on')
    }
})

// article3
var slider = $("#article3 .slide-group").slick({ 
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼 번호버튼
    pauseOnHover: false, // 마우스오버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: false, // 좌우화살표 사용여부(생략가능)

})
function grow ( year, number) {
    var count = 1900;
    var stop = setInterval (function(){
        count++
        if (count<=year) {
            $(number).find('.year').text(count)
        } else {
            clearInterval(stop)
            return false
        }
    },10)
}
slider.on("beforeChange", function(e, slick, currentSlide, nextSlide){
    if (currentSlide==0) {
        grow(1945, '.slick-active')   
    }
    if (currentSlide==1) {
        grow(1946, '.slick-active')   
    }
    if (currentSlide==2) {
        grow(1947, '.slick-active')   
    }
    if (currentSlide==3) {
        grow(1948, '.slick-active')   
    }
 });


// article4
$('#article4 .cake1 > div.row').hover(function(){
    $('#article4 .cake1').addClass('on1')
}, function(){
    $('#article4 .cake1').removeClass('on1')
})
$('#article4 .cake2 > div.row').hover(function(){
    $('#article4 .cake1').addClass('on2')
}, function(){
    $('#article4 .cake1').removeClass('on2')
})

