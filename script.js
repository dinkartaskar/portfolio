function sendMessage(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name=="" || email=="" || message==""){
document.getElementById("status").innerHTML="❌ Please fill all fields.";
return;
}

document.getElementById("status").innerHTML=
"✅ Thank you, "+name+"! Your message has been received.";

}
