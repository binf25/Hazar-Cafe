const form = document.getElementById("inquiryForm");

const whatsappButton = document.getElementById("whatsappButton");
const emailButton = document.getElementById("emailButton");

const formMessage = document.getElementById("formMessage");

// HIER DEINE ECHTEN KONTAKTDATEN EINTRAGEN
const whatsappNumber = "436601234567";
const emailAddress = "info@hazarcafe.at";

function getInquiryText() {
    const data = new FormData(form);

    return `Bestellanfrage – Hazar Café

    Name: ${data.get("name")}
    E-Mail: ${data.get("email")}
    Telefon: ${data.get("phone") || "Nicht angegeben"}

    Anlass: ${data.get("occasion")}
    Produkt: ${data.get("product")}
    Wunschdatum: ${data.get("date")}
    Personenanzahl: ${data.get("guests") || "Nicht angegeben"}
    Budget: ${data.get("budget") || "Nicht angegeben"}

    Weitere Wünsche:
    ${data.get("message") || "Keine weiteren Angaben"}

    Hinweis: Unverbindliche Anfrage.`;
}

function validateForm() {
    if (!form.reportValidity()) {
        return false;
    }

    formMessage.textContent = "";
    
    return true;
}

whatsappButton.addEventListener("click", () => {
    if (!validateForm()) return;

    const message = encodeURIComponent(getInquiryText());

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
});

emailButton.addEventListener("click", () => {
    if (!validateForm()) return; 

    const subject = encodeURIComponent(
        "Bestellanfrage – Hazar Café"
    );

    const body = encodeURIComponent(getInquiryText());

    const emailURL =
        `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    window.location.href = emailURL;
});


/* Vergangene Daten im Kalender verhindern */
const eventDate = document.getElementById("eventDate");

if (eventDate) {
    const today = new Date();
    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    eventDate.min = localDate;
}


/* Footer */
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


/* Mobiles Navigationsmenü */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Menü schließen" : "Menü öffnen"
        );
    });
}