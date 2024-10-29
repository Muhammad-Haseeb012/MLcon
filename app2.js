
console.log("Hello")



function clearMessage(){
    document.getElementById("NameResult").textContent="";
    document.getElementById("EmailResult").textContent="";
     document.getElementById("NumberResult").textContent=""; 
}

 function validate(){
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let number = document.getElementById("number").value;
          clearMessage();
   
    let valid=true;
    const pattern = /^[A-Za-z\ ]{5,15}$/;
    const emailPattern = /^[a-zA-Z0-9_\.\-]+[@][a-z]+[\.][a-z]{2,3}$/;
    const phonePattern = /^\+?[0-9]{10,12}$/;

     if(name === ""){
        let message = document.getElementById("NameResult");
          message.innerHTML ="<h3> <i> Please Enter Your Name </i> </h3>";
          console.log(message)
          valid = false;   
     }else if(!pattern.test(name)){
        let message = document.getElementById("NameResult");
        message.innerHTML ="<h3> <i> Please Enter a valid Name </i> </h3>";
        console.log(message)
        valid = false;
    }

     if(email === ""){
        let message = document.getElementById("EmailResult");
         message.innerHTML ="<h3> <i> Please Enter Your Email </i> </h3>";
         console.log(message)
         valid = false;
    }else if(!emailPattern.test(email)){
        let message = document.getElementById("EmailResult");
        message.innerHTML ="<h3> <i> Email is invalid. Please provide a valid email address. </i> </h3>";
        console.log(message)
        valid = false;
    }

    if(number === ""){
        let message = document.getElementById("NumberResult");
         message.innerHTML ="<h3> <i> Please Enter your Number</i> </h3>";
         console.log(message)
         valid = false;   

    }else if(!phonePattern.test(number)){
        let message = document.getElementById("NumberResult");
        message.innerHTML ="<h3> <i> please Enter a Valid Number </i> </h3>";
        console.log(message)
        valid = false; 
    } 
    return valid;  // Return true only if all validations pass 
 }