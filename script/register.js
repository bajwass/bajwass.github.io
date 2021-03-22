function validateForm(){
     var fname = document.getElementById("fname");
     var lname = document.getElementById("lname");
     var email = document.getElementById("email");
     var pass = document.getElementById("password");
     var check = document.getElementById("rules");
     var input = document.getElementsByTagName("input");
     var message ="";

     for(var i=0; i<input.length;i++){
         if(input[i].value == ""){
             input[i].style.backgroundColor ="yellow";
         }else{
            input[i].style.backgroundColor ="";
         }
     }

    if(fname.value === "" || lname.value === "" || email.value === "" || pass.value === "" && !check.checked){
        alert("Please fill in all highlighted fields");
        document.getElementById("checkerror").innerHTML ="*Please Checkbox before continuing";
        return false;

    }
}