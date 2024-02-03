let eyeoff = document.getElementById("eyeoff");
let password = document.getElementById("password");

eyeoff.onclick = function(){
    if (password.type =="password"){
        password.type= "text";
        eyeoff.src = "eye1.png"
    } else{
        password.type= "password";
        eyeoff.src = "eyeopen.png"
    }
}
