window.onload = function(){
    var nodes = document.getElementsByTagName("*");

    for(var i=1;i<nodes.length;i++){
        if(nodes[i].nodeType !=3 && nodes[i].nodeName !="DIV"){
            nodes[i].innerHTML = nodes[i].innerHTML + "<div class = 'hoveNode'>"+ nodes[i].nodeName + "</div>"
            nodes[i].addEventListener("click",NodeF);
        }
    }
    function NodeF(){
        alert(cnode.id);
    }



};
 
 
