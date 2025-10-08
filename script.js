// Run everything after page loads
document.addEventListener("DOMContentLoaded", () => {

    /*  1. DOM Manipulation */

    // Dynamic greeting
    const greeting = document.querySelector(".hi");
    const hour = new Date().getHours();
    if (hour < 12) {
        greeting.textContent = "Good Morning 🌞";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon 🌤️";
    } else {
        greeting.textContent = "Good Evening 🌙";
    }

    // Footer date update
    const footer = document.querySelector("footer p");
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `© ${year} All Rights Reserved | Updated: ${new Date().toDateString()}`;
    }

    /*2. Event Handling */

    // Skill card click toggle
    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("active");
            card.style.background = card.classList.contains("active") ? "#111" : "#e38528";
            card.style.color = card.classList.contains("active") ? "#fff" : "#000";
        });
    });

    // Dark mode toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "🌙 Toggle Dark Mode";
    toggleBtn.className = "btn";
    document.querySelector("header").appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    /*
       3. Form Validation*/

    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop default submit

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert("❌ Please fill out all fields!");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("❌ Invalid Email Address!");
            return;
        }

        alert(`✅ Thank you ${name}, your message has been sent!`);
        form.reset();
    });
    

    /* ==============================
       4. Extra: Scroll to Top Button
    ============================== */

    const topBtn = document.createElement("button");
    topBtn.textContent = "⬆️ Top";
    topBtn.className = "btn";
    topBtn.style.position = "fixed";
    topBtn.style.bottom = "20px";
    topBtn.style.right = "20px";
    topBtn.style.display = "none";
    document.body.appendChild(topBtn);

    // Show button when scrolling
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    // Scroll smoothly to top
    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});



console.log("Script is working!");
