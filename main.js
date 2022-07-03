let plusMenu = document.querySelector(".plus");
let menuUl = document.querySelector(".menuUl");
let boxes = document.querySelector(".boxes");
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");


function showMenu() {
    if (menuUl.style.display === "block") {
        menuUl.style.display = "none";
    } else {
        menuUl.style.display = "block";
    }
}
// ////////////////////////

let userId = 1;
btnNext.addEventListener('click',()=>{
    userId++;
    if(userId==10){
        userId=1;
    }
    displayInfo();
});
btnPrev.addEventListener('click',()=>{
    userId--;
    if(userId==0){
        userId=10;
    }
    displayInfo();
});
function getInfo(userId) {
    return new Promise((resolve) => {
        let url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url).then((response) => {
            resolve(response.json());
        });
    });
}

function getToDoInfo() {
    return new Promise((resolve) => {
        let url = 'https://jsonplaceholder.typicode.com/todos';
        fetch(url).then((response) => {
            resolve(response.json());
        });
    });
}

async function displayInfo() {
    let showUserInfo = ``;
    let showTodoInfo = ``;
    try {
        const dataUser = await getInfo(userId);
        const dataToDo = await getToDoInfo();
        showUserInfo = `
        <li>${dataUser.name}</li>
        <li>${dataUser.phone}</li>
        <li>${dataUser.company.name}</li>
        <li>${dataUser.email}</li>
        `;
        menuUl.innerHTML = showUserInfo;

        // call Todo Info 
        dataToDo.forEach(card => {
            if (userId === card.userId) {
                x=Math.floor(Math.random() *1000)
                showTodoInfo +=`
                <div class="box">
                    <h2>${card.title}</h2>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault${x}">
                        <label class="form-check-label" for="flexSwitchCheckDefault${x}">Complete</label>
                    </div>
                </div>
                `;
                boxes.innerHTML = showTodoInfo;
            }
        });
    } catch {
        showUserInfo = `No User Yet 0-0`;
    }
}
displayInfo();
