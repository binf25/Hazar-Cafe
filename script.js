document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");

    if (!footer) {
        return;
    }

    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer konnte nicht geladen werden.");
            }

            return response.text();
        })
        .then(data => {
            footer.innerHTML = data;
        })
        .catch(error => {
            console.error("Footer Fehler:", error);
        });
});


const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

/* Hamburger-Menü */
if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Menü schließen" : "Menü öffnen"
        );

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
}