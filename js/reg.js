function validateForm(){
    if(document.regform.fname.value == ""){
        document.getElementById("fnerror").innerHTML ="*Enter First Name";
        return false;
    }


    if(fname.value == ""){
        document.getElementById("fnerror").innerHTML ="*Enter First Name";
        return false;

    }
    if(lname.value == ""){
        document.getElementById("lnerror").innerHTML ="*Enter Last Name";
        return false;
   
    }
    if(email.value == ""){
        document.getElementById("emailerror").innerHTML ="*Enter email";
        return false;

    }
    if(pass.value == ""){
        document.getElementById("passerror").innerHTML ="*Enter Password";
        return false;

    }
    if(!check.checked){
       document.getElementById("checkerror").innerHTML ="*Please Checkbox before continuing";
    }


}