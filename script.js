// ================================
// Mehndi & Bridal Art Portfolio
// JavaScript File
// ================================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to Mehndi & Bridal Art Portfolio");

    setTimeout(() => {
        alert("🌸 Welcome to Mehndi & Bridal Art Portfolio!");
    }, 800);
});

// ================================
// Navbar Shadow on Scroll
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
        header.style.background = "#6b3f18";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "#8B4513";
    }

});

// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// Contact Form Validation
// ================================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "2px solid red";

            } else {

                input.style.border = "2px solid green";

            }

        });

        if (valid) {

            alert("✅ Thank You!\nYour booking request has been submitted.");

            form.reset();

            inputs.forEach(input => {

                input.style.border = "1px solid #ccc";

            });

        } else {

            alert("⚠ Please fill all required fields.");

        }

    });

}

// ================================
// Gallery Click Animation
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(1.05)";

        setTimeout(() => {

            card.style.transform = "scale(1)";

        }, 300);

    });

});

// ================================
// Fade Animation on Scroll
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s";

    observer.observe(section);

});

// ================================
// Typing Effect
// ================================

const heading = document.querySelector(".hero h1");

if (heading) {

    const text = heading.innerText;

    heading.innerText = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            heading.innerText += text.charAt(i);

            i++;

            setTimeout(typing, 80);

        }

    }

    typing();

}

// ================================
// Scroll To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.padding = "12px 18px";
topBtn.style.border = "none";
topBtn.style.background = "#8B4513";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.borderRadius = "50%";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================================
// Footer Year
// ================================

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = `© ${year} Mehndi & Bridal Art Portfolio | Designed with ❤️`;

}

// ================================
// Random Bridal Quotes
// ================================

const quotes = [

    "Every bride deserves beautiful Mehndi.",

    "Art that tells your love story.",

    "Tradition meets creativity.",

    "Creating memories with every design.",

    "Your hands deserve elegance."

];

setInterval(() => {

    const random = Math.floor(Math.random() * quotes.length);

    console.log(quotes[random]);

}, 5000);

// ================================
// Image Hover Effect
// ================================

const images = document.querySelectorAll(".card img");

images.forEach(image => {

    image.addEventListener("mouseover", () => {

        image.style.filter = "brightness(110%)";

    });

    image.addEventListener("mouseout", () => {

        image.style.filter = "brightness(100%)";

    });

});

// ================================
// Double Click Like Effect
// ================================

cards.forEach(card => {

    card.addEventListener("dblclick", () => {

        alert("❤️ You liked this Mehndi Design!");

    });

});

// ================================
// Keyboard Shortcut
// Press H = Home
// ================================

document.addEventListener("keydown", (event) => {

    if (event.key.toLowerCase() === "h") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

// ================================
// End of JavaScript
// ================================
