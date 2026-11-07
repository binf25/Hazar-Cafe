const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const status = document.getElementById("contactStatus");
        const button = contactForm.querySelector('button[type="submit"]');

        button.disabled = true;
        button.textContent = "Wird gesendet...";

        status.textContent = "";
        status.style.color = "";

        const formData = Object.fromEntries(
            new FormData(contactForm).entries()
        );

        formData._subject = "Neue Kontaktanfrage – Hazar-Café";
        formData._replyto = formData.email;
        formData._template = "table";

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/office@hazar-cafe.at",
                
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            if (!response.ok || String(result.success).toLowerCase() !== "true") {
                throw new Error(result.message || "Versand fehlgeschlagen.");
            }

            contactForm.reset();

            status.textContent =
                "Vielen Dank für deine Nachricht! Wir haben deine Anfrage erhalten und melden uns so schnell wie möglich bei dir.";

            status.style.color = "green";

        } 
        catch (error) {
            status.textContent =
                "Leider konnte deine Nachricht nicht gesendet werden. Bitte versuche es erneut oder kontaktiere uns telefonisch.";

            status.style.color = "red";

            console.error("Kontaktformular:", error);

        } 
        finally {
            button.disabled = false;
            button.textContent = "Nachricht senden";
        }
    });
}


const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {
    reservationForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const status = document.getElementById("reservationStatus");
        const button = reservationForm.querySelector('button[type="submit"]');

        button.disabled = true;
        button.textContent = "Wird gesendet...";

        status.textContent = "";
        status.style.color = "";

        const formData = Object.fromEntries(
            new FormData(reservationForm).entries()
        );

        formData._subject = "Neue Tischreservierung – Hazar-Café";
        formData._replyto = formData.email;
        formData._template = "table";

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/office@hazar-cafe.at",
                
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            if (!response.ok || String(result.success).toLowerCase() !== "true") {
                throw new Error(result.message || "Versand fehlgeschlagen.");
            }

            reservationForm.reset();

            status.textContent =
                "Vielen Dank für deine Reservierungsanfrage! Wir haben deine Anfrage erhalten und melden uns zur Bestätigung bei dir.";

            status.style.color = "green";

        } 
        catch (error) {
            status.textContent =
                "Leider konnte deine Anfrage nicht gesendet werden. Bitte versuche es erneut oder rufe uns direkt an.";

            status.style.color = "red";

            console.error("Reservierungsformular:", error);

        } 
        finally {
            button.disabled = false;
            button.textContent = "Reservierung senden";
        }
    });
}


const dateInput = document.getElementById("date");

if (dateInput) {
    const today = new Date();
    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    dateInput.min = localDate;
}


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