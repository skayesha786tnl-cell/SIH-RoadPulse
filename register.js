const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");

registerForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check passwords
    if (password !== confirmPassword) {
        registerMessage.textContent = "❌ Passwords do not match.";
        registerMessage.style.color = "red";
        return;
    }

    try {
        registerMessage.textContent = "⏳ Creating account...";
        registerMessage.style.color = "orange";

        const response = await fetch(
            "http://localhost:5000/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    password: password
                })
            }
        );

        const data = await response.json();

        if (response.ok) {
            registerMessage.textContent =
                "✅ Account created successfully!";
            registerMessage.style.color = "green";

            registerForm.reset();

            console.log("Registration successful:", data);
        } else {
            registerMessage.textContent =
                "❌ " + (data.message || "Registration failed.");
            registerMessage.style.color = "red";
        }

    } catch (error) {
        console.error("Registration error:", error);

        registerMessage.textContent =
            "❌ Cannot connect to RoadPulse server.";
        registerMessage.style.color = "red";
    }
});