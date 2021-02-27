var nodes = document.getElementsByTagName("*");

for(var i =0; nodes.length;i++){
    if(nodes[i].nodeType !=3){
        var oldnodes = nodes[i].innerHTML;
        nodes[i].innerHTML = oldnodes
    }
}
function clickCheck(){
    
}
