

function clearMessage(){
    document.getElementById("NameResult").textContent="";
    document.getElementById("PasswordResult").textContent="";
     document.getElementById("ConfirmPasswordResult").textContent="";
}

 function validate(){
let name = document.getElementById("UserName").value;
let password = document.getElementById("UserPassword").value;
let confirmPassword = document.getElementById("ConfirmPassword").value;
          clearMessage();
   
    let valid=true;

     if(name === ""){
        let message = document.getElementById("NameResult");
          message.innerHTML ="<h3> <i> Please Enter UserName </i> </h3>";
          console.log(message)
          valid = false;   
     }

     if(password === ""){
        let message = document.getElementById("PasswordResult");
         message.innerHTML ="<h3> <i> Please Enter password </i> </h3>";
         console.log(message)
         valid = false;

    }else if(password.length < 6){
        let message = document.getElementById("PasswordResult");
        message.innerHTML ="<h3> <i> Password Length should be greater than 6 </i> </h3>";
        console.log(message)
        valid = false;
    }

    if(confirmPassword === ""){
        let message = document.getElementById("ConfirmPasswordResult");
         message.innerHTML ="<h3> <i> Please Enter confirm password </i> </h3>";
         console.log(message)
         valid = false;   

    }else if(password != confirmPassword){
        let message = document.getElementById("ConfirmPasswordResult");
        message.innerHTML ="<h3> <i> password should be Same </i> </h3>";
        console.log(message)
        valid = false; 
    }
    return valid;  // Return true only if all validations pass
 }