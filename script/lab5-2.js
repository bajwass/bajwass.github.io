window.addEventListener("load", function(){
    var nodes = document.getElementsByTagName("*");

    for(var i=1;i<nodes.length;i++){
        var nodenum = nodes[i].nodeType;
        var cnode = nodes[i];

        if(nodenum !=3 && cnode.nodeName !="DIV"){
            var o = cnode.innerHTML;
            cnode.innerHTML = o + "<div class = 'hoveNode'>"+ cnode.nodeName + "</div>"
            cnode.addEventListener("click",NodeF);
        }
    }
    function NodeF(){
        alert(cnode.id + cnode.parentNode.nodeName);
    }



});
 
 
