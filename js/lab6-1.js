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
        $("#message").html("You clicked in panel");
        $(".panel").off("mousemove");
    })
    .on("mousemove", function(e){
     $("#message").html("x=" + e.pageX + " y=" + e.pageY);   
    })
    .on("mouseleave", function(e){
        $("#message").html("The mouse has left.")
    });

$("<img>",{
    src: "images/art/thumbs/13030.jpg"

})
.appendTo("#panel-2");



