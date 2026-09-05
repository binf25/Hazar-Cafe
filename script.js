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
const dropdownToggle = document.querySelector('.dropdown-toggle');
const megaMenu = document.querySelector('.mega-menu');

/* Hamburger-Menü */
if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');

        if (nav.classList.contains('active')) {
            menuToggle.textContent = '✕';
            menuToggle.setAttribute('aria-label', 'Menü schließen');
        } 
        else {
            menuToggle.textContent = '☰';
            menuToggle.setAttribute('aria-label', 'Menü öffnen');

            // Produkte-Untermenü beim Schließen zurücksetzen
            if (megaMenu) {
                megaMenu.style.display = 'none';
            }
        }
    });
}