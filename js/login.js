// const USERNAME = "Rvcc";

// const PASSWORD = "Rvcc@26   ";

const users = [

{

username:"admin",

password:"Admin@123",

role:"Administrator"

},
{

username:"Dhanush",

password:"Dha@2026",

role:"Administrator"

},
{

username:"Adil",

password:"Adil@2026",

role:"Administrator"

},

{

username:"hr",

password:"HR@123",

role:"HR"

},

{

username:"finance",

password:"Finance@123",

role:"Finance"

},

{

username:"it",

password:"IT@123",

role:"IT"

},

{

username:"employee",

password:"Company@123",

role:"Employee"

}

];

document
.getElementById("togglePassword")
.addEventListener("click",()=>{

const pwd=document.getElementById("password");

pwd.type=pwd.type==="password"?"text":"password";

});

document
.getElementById("loginForm")
.addEventListener("submit",function(e){

e.preventDefault();

const user=document.getElementById("username").value.trim();

const pass=document.getElementById("password").value.trim();

// if(user===USERNAME && pass===PASSWORD){

// sessionStorage.setItem("loggedIn","true");

// sessionStorage.setItem("username",user);

// window.location="index.html";

// }

const validUser = users.find(

u =>

u.username===user &&

u.password===pass

);

if(validUser){

sessionStorage.setItem("loggedIn","true");

sessionStorage.setItem("username",validUser.username);

sessionStorage.setItem("role",validUser.role);

window.location="index.html";

}
else{

document.getElementById("error").innerHTML="Invalid Username or Password";

}

});

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
'<i class="bi bi-clock-fill"></i> ' +
now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();