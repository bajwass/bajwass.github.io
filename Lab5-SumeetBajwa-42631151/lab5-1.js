
function background(b){
    if(b.type == "focus"){
        b.target.style.backgroundColor = "red";

    }
    else if(b.type == "blur"){
        b.target.style.backgroundColor = "white";
    }
}

window.addEventListener("load", function(){
    var cssSelect = "input[type=text], textarea[name=description]";
    var field = document.querySelectorAll(cssSelect);
    for(i=0; i<field.length;i++){
        field[i].addEventListener("focus", background);
        field[i].addEventListener("blur", background);
    }


});
function check(ch){
    if(ch.type === "checkbox"){
        if(ch.checked){
            return false;
        }else{
            return true;
        }
        if(ch.type === ""){
            return true;
        }
        return false;

    }
}
window.addEventListener("submit", function(e){
    var blanks = document.querySelectorAll(".required");
    
    for(var i=0; i<blanks.length;i++){
        if(check(blanks[i])){
            e.preventDefault();
        }
        

    }
});

