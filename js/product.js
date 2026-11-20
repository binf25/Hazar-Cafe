const products = {
    torten: {
        name: "Torten & Kuchen",
        image: "images/produkte/torten.jpg",
        description: "Unsere Torten und Kuchen für besondere Anlässe",
        items: [
            ["Fruchttorten", "€ 6,00 / Stk."],
            ["Tiramisu", "€ 4,60 / Stk."],
            ["Tortenfoto A4", "€ 15,00"],
            ["Tortenfoto A5", "€ 10,00"],
            ["Mini-Torten", "€ 8,00 / Stk."],
            ["Torte mit Nussschnitte", "€ 4,60 / Stk."],
            ["Torte mit Schokoschnitte", "€ 4,60 / Stk."],
            ["Erdbeerschnitte", "€ 4,60 / Stk."],
            ["Kleine Torte", "€ 19,00"],
            ["Mittlere Torte", "€ 29,00"],
            ["Große Torte", "€ 39,00"],
            ["Torte Nr. 1", "€ 50,00"],
            ["Torte Nr. 2", "€ 70,00"],
            ["Torte Nr. 3", "€ 90,00"],
            ["Torte Nr. 4", "€ 120,00"],
            ["Torte Nr. 5", "€ 150,00"],
            ["Herztorte klein", "€ 32,00"],
            ["Herztorte groß", "€ 42,00"]
        ]
    },

    suessspeisen: {
        name: "Türkische Süßspeisen",
        image: "images/produkte/süssspeisen.jpg",
        description: "Traditionelle türkische Desserts",
        items: [
            ["Traliçe Sorten", "€ 4,30 / Stk."],
            ["Kazan Dibi", "€ 4,40 / Stk."],
            ["Obstschüssel", "€ 4,30 / Stk."],
            ["Güllaç", "€ 4,70 / Stk."],
            ["Cheesecake", "€ 4,70 / Stk."],
            ["Spangile Sorten", "€ 3,80 / Stk."],
            ["Keskül Puding", "€ 3,80 / Stk."],
            ["Oreo & Lotus Sorten", "€ 3,80 / Stk."],
            ["Milchreis", "€ 4,60 / Stk."],
            ["Mini Ekler", "€ 1,60 / Stk."],
            ["Ekler", "€ 2,60 / Stk."],
            ["Halka Tatlisi", "€ 1,90 / Stk."]
        ]
    },

    baklava: {
        name: "Baklava",
        image: "images/produkte/baklava.jpg",
        description: "Traditionelle Baklava-Spezialitäten",
        items: [
            ["Baklava mit Nuss", "€ 28,00 / kg"],
            ["Baklava mit Nuss Sorten", "€ 28,00 / kg"],
            ["Kadayif mit Nuss", "€ 28,00 / kg"],
            ["Baklava mit Pistazien", "€ 34,00 / kg"],
            ["Baklava mit Pistazien Sorten", "€ 34,00 / kg"],
            ["Havuç Dilim mit Pistazien", "€ 35,00 / kg"],
            ["Midye mit Pistazien", "€ 35,00 / kg"],
            ["Kaltes / Soğuk Baklava", "€ 34,00 / kg"],
            ["Tulumba", "€ 20,00 / kg"],
            ["Şekerpare", "€ 20,00 / kg"],
            ["Helva mit Käse", "€ 20,00 / kg"]
        ]
    },

    gebaeck: {
        name: "Frisches Gebäck",
        image: "images/produkte/gebäck.jpg",
        description: "Herzhaftes und süßes Gebäck",
        items: [
            ["Sesamring / Simit", "€ 1,80 / Stk."],
            ["Poğaça mit Käse", "€ 1,80 / Stk."],
            ["Poğaça mit Kartoffel", "€ 1,80 / Stk."],
            ["Açma", "€ 2,20 / Stk."],
            ["Açma mit Käse", "€ 2,50 / Stk."],
            ["Wasserstrudel", "€ 3,90 / Stk."],
            ["Börek Sorten", "€ 3,90 / Stk."],
            ["Tahinli Çörek", "€ 4,00 / Stk."],
            ["Topfengolatsche", "€ 2,20 / Stk."],
            ["Schokocroissant", "€ 2,20 / Stk."],
            ["Nuss-Croissant", "€ 2,20 / Stk."],
            ["Topfenstrudel", "€ 2,50 / Stk."],
            ["Apfelstrudel", "€ 2,50 / Stk."],
            ["Izmir Bombası", "€ 1,30 / Stk."],
            ["Süße Teegebäcke", "€ 25,00 / kg"]
        ]
    },

    warme: {
        name: "Warme Getränke",
        image: "images/produkte/warm-getränke.jpg",
        description: "Kaffee, Tee und Heißgetränke",
        items: [
            ["Melange", "€ 4,20"],
            ["Großer Brauner", "€ 4,60"],
            ["Kleiner Brauner", "€ 3,40"],
            ["Kakao", "€ 4,20"],
            ["Türkischer Kaffee", "€ 4,20"],
            ["Kleiner Tee", "€ 1,50"],
            ["Großer Tee", "€ 3,00"],
            ["Caffè Latte", "€ 4,80"],
            ["Coffee to go", "€ 2,00"]
        ]
    },

    kalte: {
        name: "Kalte Getränke",
        image: "images/produkte/kalt-getränke.jpg",
        description: "Erfrischende Getränke und Softdrinks",
        items: [
            ["Red Bull 0,25 l", "€ 3,00"],
            ["Wild Dragon 0,25 l", "€ 2,50"],
            ["Coca-Cola 0,5 l", "€ 3,00"],
            ["Coca-Cola Light 0,5 l", "€ 3,00"],
            ["Fanta 0,5 l", "€ 3,00"],
            ["Eistee 0,5 l", "€ 3,00"],
            ["Mineralwasser 0,5 l", "€ 3,00"],
            ["Coca-Cola 0,33 l", "€ 2,50"],
            ["Coca-Cola Light 0,33 l", "€ 2,50"],
            ["Fanta 0,33 l", "€ 2,50"],
            ["Sprite 0,33 l", "€ 2,50"],
            ["Eistee 0,33 l", "€ 2,50"],
            ["Uludağ 0,33 l", "€ 2,50"],
            ["Ayran 0,2 l", "€ 1,80"],
            ["Munzur Wasser 0,5 l", "€ 1,80"]
        ]
    }
};


const categoriesContainer = document.getElementById("categories");
const categoryHeading = document.getElementById("categoryHeading");
const productView = document.getElementById("productView");
const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");
const productList = document.getElementById("productList");

/* Kategorien anzeigen */
function renderCategories() {
    categoriesContainer.innerHTML = "";

    Object.entries(products).forEach(([key, category]) => {
        const card = document.createElement("div");
        card.className = "menu-card";

        card.innerHTML = `
            <img
                src="${category.image}"
                alt="${category.name}"
                class="menu-category-image"
                loading="lazy"
            >

            <h3>${category.name}</h3>
            <p>${category.description}</p>
            <button class="btn" type="button">Produkte ansehen</button>
        `;

        card.querySelector("button").addEventListener("click", (event) => {
            event.stopPropagation();
            showProducts(key);
        });

        card.addEventListener("click", (event) => {
            if (event.target.tagName !== "BUTTON") {
                showProducts(key);
            }
        });

        categoriesContainer.appendChild(card);
    });
}

/* Produkte einer Kategorie anzeigen */
function showProducts(key) {
    const category = products[key];

    categoryTitle.textContent = category.name;
    categoryDescription.textContent = category.description;

    productList.innerHTML = "";

    category.items.forEach(([name, price]) => {
        const item = document.createElement("div");
        item.className = "menu-item";

        const productName = document.createElement("div");
        const heading = document.createElement("h3");
        heading.textContent = name;
        productName.appendChild(heading);

        const priceElement = document.createElement("span");
        priceElement.textContent = price;

        item.append(productName, priceElement);
        productList.appendChild(item);
    });

    categoryHeading.hidden = true;
    categoriesContainer.hidden = true;
    productView.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* Zurück zur Kategorieübersicht */
document.getElementById("backButton").addEventListener("click", () => {
    productView.hidden = true;
    categoryHeading.hidden = false;
    categoriesContainer.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


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


/* Kategorien anzeigen */
renderCategories();
