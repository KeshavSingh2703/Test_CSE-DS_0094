
function authenticateUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const validUsername = "Keshav";
    const validPassword = "Hello123"
    if (username === validUsername && password === validPassword) {
        localStorage.setItem("authenticated", "true");
        window.location.href = "Dashboard.html";
        return false;
    } else {
        document.getElementById("Invalid login details")
        return false;
    }
}
    