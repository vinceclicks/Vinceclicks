const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#navbarToggler li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 2.2) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }
    });
});

window.addEventListener("scroll" || "click", () => {
    navLi.forEach((a) => {
        const navText = a.textContent;
        if (a.classList.contains("active")) {
            if (a.textContent == "Home") {
                a.textContent = "<Home/>";
            }
            if (a.textContent == "About") {
                a.textContent = "<About/>";
            }
            if (a.textContent == "Skills") {
                a.textContent = "<Skills/>";
            }
            if (a.textContent == "Projects") {
                a.textContent = "<Projects/>";
            }
            if (a.textContent == "Contact") {
                a.textContent = "<Contact/>";
            }
        } else {
            if (a.textContent == "<Home/>") {
                a.textContent = "Home";
            }
            if (a.textContent == "<About/>") {
                a.textContent = "About";
            }
            if (a.textContent == "<Skills/>") {
                a.textContent = "Skills";
            }
            if (a.textContent == "<Projects/>") {
                a.textContent = "Projects";
            }
            if (a.textContent == "<Contact/>") {
                a.textContent = "Contact";
            }
        }
    });
});
