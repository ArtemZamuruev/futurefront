/**
* Created with FutureCompilledApp.
* User: ArtemZamuruev
* Email: artem.zamuruev@gmail.com
* Date: 2016-08-01
* Time: 09:45 AM
*/


$(document).ready(function(){
    setTimeout(function(){
        $("div.popup__container").css({
            "max-height" : parseFloat($(window).height()*0.8)-60 
        });

        $(".popup__container").mCustomScrollbar({
            axis:"y",
            setHeight: $("div.popup__content").height()-50 + " px"
        });
    }, 10);
});

$("div.speaker__item").on("click", function(){
    $("body").addClass("overflow_hidden");
    
    $("div.popup__speaker__photo").css({"background-image": $("div.speaker__image",this).css("background-image")});
    
    $("h1.popup__speaker__name").text($("div.speaker__name", this).text());
    $("h3.popup__speaker__role").text($("div.speaker__role", this).text());
    
    $("div.popup__layout").removeClass("-no-visible");
    $("div.popup__content").removeClass("-no-visible");
    $("div.popup__layout").addClass("-visible");  
    $("div.popup__content").addClass("-visible");
    
    setTimeout(function(){
        $("div.popup__container").css({
            "max-height" : parseFloat($(window).height()*0.8)-60 
        });

        $(".popup__container").mCustomScrollbar({
            axis:"y",
            setHeight: $("div.popup__content").height()-50 + " px"
        });
    }, 10);
    
    $("p.popup__speaker__description").remove();
    var desc_p_array = popup_descriptions_arr[$("div.speaker__name", this).text()];
    $.each(desc_p_array, function(index, val){
        $("div.mCSB_container", "div.popup__container").append('<p class="popup__speaker__description">'+val+"</p>");
    });
});

$("div.popup__close__button").on("click", hidePopup);
$("div.popup__layout").on("click", hidePopup);


function hidePopup(){
    $("div.popup__layout").removeClass("-visible");
    $("div.popup__content").removeClass("-visible");
    $("div.popup__layout").addClass("-no-visible");
    $("div.popup__content").addClass("-no-visible");
    $("body").removeClass("overflow_hidden");
}
