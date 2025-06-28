const navItem = document.querySelectorAll(".navbar-group > .navbar-item");
    navItem.forEach((nav) => {

    const navDown = nav.querySelector(".navbar-down");
        if (navDown) {
        nav.addEventListener("mouseenter", () => {
            navDown.classList.add("navbar-expand");
        });
        nav.addEventListener("mouseleave", () => {
            navDown.classList.remove("navbar-expand");
        });
        }
    });

const menuToggle = document.querySelector(".navbar-toggle");
    menuToggle.addEventListener("click", (e) => {
    document
    .querySelector(".navbar-group")
    .classList.toggle("navbar-expand");
        document
        .querySelector(".navbar-action")
        .classList.toggle("navbar-expand");
        e.target.classList.toggle("navbar-expand");
    });

// Initialize WOW.js for animations
    new WOW().init();
// Initialize AOS (Animate on Scroll) library
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });
