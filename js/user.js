const username = sessionStorage.getItem("username");

const role = sessionStorage.getItem("role");

const userLabel = document.getElementById("userLabel");

if(userLabel){

userLabel.innerHTML =

`<i class="bi bi-person-circle"></i>

${username}`;

}