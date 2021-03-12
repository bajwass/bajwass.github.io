/* jQuery and JavaScript code here for lab6-1.html */

$("#pageTitle").html("Lab 6 - DOM Manipulation with jQuery.");

var ta = $("p").attr("textarea");
$("p").attr("textarea","#msgArea");
$("#msgArea").html("My class is form-control");

$("button").css("background-color", "red");
$("body").css("background-color", "ivory");

$(".center-icons").addClass("selected");


$(".panel")
    .on("click",function(){
        $("span#message").html("You clicked in panel");
        $(".panel").off("mousemove");
    })
    .on("mousemove", function(e){
     $("span#message").html("x=" + e.pageX + " y=" + e.pageY);   
    })
    .on("mouseleave", function(e){
        $("span#message").html("The mouse has left.")
    });

$("<img>",{
    src: "images/art/thumbs/13030.jpg"

})
.appendTo("#panel-2");

$(".img-responsive").on("mouseover", function(e){
    var alt = $(this).attr('alt');
    var src = $(this).attr('src');
    var newsrc = src.replace("medium","small");

    var preview = $('<div class="preview"></div>');
    var image = $('<img src="' + newsrc + '">');
    var caption = $('<p>' + alt + '</p>');

    preview.append(image);
    preview.append(caption);
    $('#stories').after(preview);
    

});
$(".img-responsive").on("mouseleave", function(e){
    $(preview).remove();
});


