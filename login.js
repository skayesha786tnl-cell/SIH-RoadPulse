const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        loginMessage.textContent =
            "Please enter your email and password.";

        loginMessage.style.color = "red";
        return;
    }

    loginMessage.textContent = "Logging in...";
    loginMessage.style.color = "black";

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        const data = await response.json();

        if (data.success) {

            loginMessage.textContent =
                "✅ Login successful!";

            loginMessage.style.color = "green";

            // Save logged-in user
            localStorage.setItem(
                "roadpulseUser",
                JSON.stringify(data.user)
            );

        } else {

            loginMessage.textContent =
                "❌ " + data.message;

            loginMessage.style.color = "red";
        }

    } catch (error) {

        console.error("Login error:", error);

        loginMessage.textContent =
            "❌ Cannot connect to RoadPulse server.";

        loginMessage.style.color = "red";
    }
});