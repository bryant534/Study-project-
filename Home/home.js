document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form"); // Ambil form login

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Cegah form reload halaman

            let username = document.getElementById("username").value;

            if (username.trim() !== "") {
                localStorage.setItem("userName", username); // Simpan username ke localStorage
                window.location.href = "home/Home.html"; // Pindah ke home.html
            } else {
                alert("Please enter a valid username!");
            }
        });
    }

    // Cek apakah di home.html
    let welcomeMessage = document.getElementById("welcomeMessage");
    console.log("Checking welcomeMessage:", welcomeMessage); // Debugging

    if (welcomeMessage) {
        let userName = localStorage.getItem("userName");
        console.log("Fetched userName:", userName); // Debugging

        if (userName) {
            welcomeMessage.textContent = `Hi, ${userName}! Welcome to ZenStudy`;
        } else {
            console.log("No username found, redirecting...");
            window.location.href = "../index.html"; // Balik ke login kalau belum ada username
        }
    }
});

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}


