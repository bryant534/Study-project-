document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form"); // Ambil form login

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Cegah form reload halaman

            let username = document.getElementById("username").value;

            if (username.trim() !== "") {
                localStorage.setItem("userName", username); 
                window.location.href = "home/Home.html"; 
            } else {
                alert("Please enter a valid username!");
            }
        });
    }

    // Jika di home.html, tampilkan username
    let welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
        let userName = localStorage.getItem("userName");
        if (userName) {
            welcomeMessage.textContent = `Hi, ${userName}! Welcome to ZenStudy`;
        } else {
            window.location.href = "../index.html"; 
        }
    }
});