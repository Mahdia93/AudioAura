$('.btn-load-video').click(function() {
			 event.preventDefault(); 
			 $('#the-player').append($("textarea.embed-code").val());
 
			});



$("#redRect").on({
    mouseenter: function(){
        $(this).css("opacity", "1");
    }, 
    mouseleave: function(){
        $(this).css("opacity", ".6");
    }, 
    click: function(){
        $(this).css("opacity", "1");
        $(this).off("mouseleave")
    } 
});


$("#redRect").mouseover(function(){
    $("#currentMood").text("Passionate");
});

$("#pinkRect").mouseover(function(){
    $("#currentMood").text("Cheerful");
});

$("#orangeRect").mouseover(function(){
    $("#currentMood").text("Energetic");
});

$("#yellowRect").mouseover(function(){
    $("#currentMood").text("Happy");
});

$("#greenRect").mouseover(function(){
    $("#currentMood").text("Calm");
});

$("#blueRect").mouseover(function(){
    $("#currentMood").text("Determined");
});

$("#purpleRect").mouseover(function(){
    $("#currentMood").text("Romantic");
});

$("#brownRect").mouseover(function(){
    $("#currentMood").text("Concerned");
});

$("#whiteRect").mouseover(function(){
    $("#currentMood").text("Serene");
});

$("#greyRect").mouseover(function(){
    $("#currentMood").text("Sad");
});

