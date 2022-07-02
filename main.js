let plusMenu = document.querySelector(".plus");
let menuUl = document.querySelector(".menuUl");

function showMenu() {
    if (menuUl.style.display === "block"){
        menuUl.style.display = "none";
    }else{
        menuUl.style.display = "block";
    }
}