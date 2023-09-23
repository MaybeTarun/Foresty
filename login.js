const bg = document.getElementById('bg');
const num = 400;

for (let i = 0; i<num; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    bg.append(box)
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    let i = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter,index) => {
            if(index < i) {
                return event.target.dataset.value[index];
            }
            
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

    if (i >= 9) clearInterval(interval);
    
    i += 1/5;

    }, 50);
};

document.getElementById("login").addEventListener("click", function (e) {
    e.preventDefault();

    var lemail = document.getElementById("lemail").value;
    var lpassword = document.getElementById("lpassword").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    console.log("Email: " + lemail);
    console.log("Password: " + lpassword);

    document.getElementById("lemail").value = "";
    document.getElementById("lpassword").value = "";

});

document.getElementById("register").addEventListener("click", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

});