function userCheck(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
   
    if(username=="admin" && password =="admin"){
        window.location.replace("index.html");
        return false
    }else{
        window.location.replace("login.html");
    }
}


document.getElementById("Password").onclick = function() {
    this.style.borderBottomColor = "black"; // Change to your desired color
    document.getElementById("Username").style.borderBottomColor = ""; // Remove color from Username
};

document.getElementById("Username").onclick = function() {
    this.style.borderBottomColor = "black"; // Change to your desired color
    document.getElementById("Password").style.borderBottomColor = ""; // Remove color from Password
};

function logoutTask(){
    var btn = document.getElementById("img1").value;
        window.location.replace("login.html");
    }
   