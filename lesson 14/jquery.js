$(document).ready(function() {
    $("#mainDiv").css("opacity", 0.5);
    $("#mainDiv").hover(function() {
        $(this).animate({opacity: 1.0}, 500);
    }, function() {
         $(this).animate({opacity: 0.5}, 500);
         $("#btn").click(function(){
            $("#mianDiv img").append("<div>Appended image</div>");
          });
        });
    });
