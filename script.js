        let attemptCount = 0;

        function validateEmail() {
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("email-error");
            const signInButton = document.getElementById("sign-in-btn");
            
            if (!emailInput.value.endsWith("@gmail.com")) {
                emailError.style.display = "block";
            } else {
                emailError.style.display = "none";
            }
            
            checkSignInButtonState();
        }

        function validatePassword() {
            const passwordInput = document.getElementById("password");
            const passwordError = document.getElementById("password-error");
            
            if (passwordInput.value.length < 6) {
                passwordError.style.display = "block";
            } else {
                passwordError.style.display = "none";
            }
            
            checkSignInButtonState();
        }

        function checkSignInButtonState() {
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
            const signInButton = document.getElementById("sign-in-btn");
            
            if (emailInput.value.includes("@gmail.com") && passwordInput.value.length >= 6) {
                signInButton.style.opacity = 1;
                signInButton.style.pointerEvents = "all";
            } else {
                signInButton.style.opacity = 0.6;
                signInButton.style.pointerEvents = "none";
            }
        }

        function handleSignIn() {
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
            const email = emailInput.value;
            const password = passwordInput.value;

            // Simulate storing the user info
            const storedEmail = localStorage.getItem("email");
            const storedPassword = localStorage.getItem("password");

            if (email === storedEmail && password === storedPassword) {
                alert("Sign In Successful!");
                attemptCount = 0;
            } else {
                attemptCount++;
                if (attemptCount >= 5) {
                    window.location.href = "error-page.html"; // Redirect to error page after 5 attempts
                } else {
                    alert("Incorrect username or password");
                }
            }
        }

        function handleRecoverPassword() {
            const delugeBox = document.createElement("div");
            delugeBox.classList.add("deluge-box");
            delugeBox.innerText = "Password recovery options coming soon!";
            document.body.appendChild(delugeBox);
            delugeBox.style.display = "block";
            setTimeout(() => {
                delugeBox.style.display = "none";
            }, 5000);
        }

        // Store the user info in localStorage after successful sign-up (this can be done after actual sign-up)
        function storeUserInfo(email, password) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
        }
 