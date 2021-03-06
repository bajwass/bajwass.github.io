/* jQuery and JavaScript code here for lab6-1.html */

$("#pageTitle").html("Lab6 - DOM Manipulation with jQuery.");

var ta = $("").attr("");
$("").attr("","");

var vd = $("div.btn btn-primary").css("background-color"); 
$("div.btn btn-primary").css("background-color", "red");

var bg = $("body").css("background-color"); 
$("body").css("background-color", "ivory");



$(".panel")
    .on("click",function(){
        $("#message").html("You clicked in panel");
        $(".panel").off("mousemove");
    })
    .on("mousemove", function(e){
     $("#message").html("x=" + e.pageX + " y=" + e.pageY);   
    })
    .on("#mouseleave", function(e){
        $("message").html("The mouse has left.")
    });