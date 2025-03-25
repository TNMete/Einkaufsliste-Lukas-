const toggleButton = document.getElementById("toggleDarkModeButton");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})



const Kategorie = document.getElementById("Kategorie");
const addButton = document.getElementById("addButton");
const artikelInput = document.getElementById("artikel");
const anzahlInput = document.getElementById("anzahl");
const preisInput = document.getElementById("preis");
const liste = document.getElementById("liste");
const deleteButton = document.getElementById("deleteList")
const gesamt = document.getElementById("gesamt");


let gesamtPreis = 0;

// function addition(zahl1, zahl2) {
//     addierezahlen = zahl1 + zahl2
//     return addierezahlen
// }
// console.log(addition(1, 2))
// console.log(addition(5, 6))

function checkInput(Objekt) {
    if (Objekt.value) {
        Objekt.style.border = "1px black solid"
        return true
    } else {
        Objekt.style.border = "1px red solid";
        return false
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addButton.click();
    }
});
addButton.addEventListener("click", () => {
    const artikel = artikelInput.value;
    const anzahl = anzahlInput.value;
    const preis = preisInput.value;
    if (Kategorie.value === "") {
        alert("Bitte Kategorie auswählen.")
    }
    if (checkInput(artikelInput) && checkInput(anzahlInput) && checkInput(preisInput)) {





        // Neues Element erstellen und in die Liste einfügen
        const new_li = document.createElement("li");
        new_li.classList.add("tooltip")
        new_li.textContent = `Kategorie: ${Kategorie.value} ${anzahl} x ${artikel}: ${preis}€ p.P. ------ ${anzahl * preis}€`;


        // tooltip
        const tooltip = document.createElement("span")
        tooltip.classList.add("tooltiptext")
        tooltip.textContent = new Date().toUTCString()

        new_li.appendChild(tooltip)

        // erstellen der checkbox
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox"

        checkBox.addEventListener("click", () => {
            if (checkBox.checked) {
                gesamtPreis += anzahl * preis;
                updatePreis();
            } else {
                gesamtPreis -= anzahl * preis;
                updatePreis();
            }
        })

        // Füge einen Löschen Button hinzu
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", () => {
            liste.removeChild(new_li);
            gesamtPreis -= anzahl * preis;
            updatePreis();
        })

        new_li.appendChild(checkBox);

        new_li.appendChild(deleteButton);

        liste.appendChild(new_li);

        // Gesamtpreis aktualisieren


        // Inputfelder leeren
        Kategorie.value = "";
        artikelInput.value = "";
        anzahlInput.value = "";
        preisInput.value = "";


    }
})

function updatePreis() {
    gesamt.textContent = `Gesamt: ${gesamtPreis.toFixed(2)}€`;
}

deleteButton.addEventListener("click", () => {
    liste.innerHTML = "";
    gesamt.textContent = "";
})