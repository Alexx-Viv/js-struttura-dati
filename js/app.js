var card = {
  id: 1,
  name: "Bloodfire Colossus",
  launchCost: ["6", "r", "r"],
  combinedManaCost: 8,
  cardType: "creature",
  subType: "giant",
  expansion: {
    reprintID: 9,
    name: "Espansione Fighissima",
    rarity: "golden",
  },
  flavorText: {
    quote: "We cannot forget...",
    author: "Orso Bubu",
  },
  abilities: [
    {
      launchCost: ["R", "T"],
      describtion: "lorem...",
    },
  ],
  illustrator: {
    author: {
      id: 1,
      name: "Greg Smith",
    },
    source: "./img.jpeg",
  },
  collectionNr: "12/43",
  constitution: 13,
  strenght: 13,
  borderColor: "#000",
};

let cardSection = document.getElementById("cards");

let subType = card.subType ? card.subType : "";
let abilitiesContent = "<em>Nessuna abilità</em>";
if (card.abilities.length) {
  abilitiesContent = "<ul>";
  for (let i = 0; i < card.abilieties; i++) {
    const currentAbility = card.abilieties[i];
    abilitiesContent += "--";
    abilitiesContent += "<li>Descrizione: ${currentAbility.description}</li>";
    (abilitiesContent +=
      "<li>Costo di lancio: ${currentAbility.launchCost.join("),
      ")}</li>";
  }
  abilitiesContent += "</ul>";
}

let cardTemplate = `
<ul class=card>
  <li>Id: ${card.id}</li>
  <li>Nome: ${card.name}</li>
  <li>Costo di lancio: ${card.launchCost.join(", ")}</li>
  <li>Costo Mana Convertito: ${card.combinedManaCost}</li>
  <li>Tipo Carta: ${card.cardType} ${subType}</li>
  <li>Espansione:
    <ul>
      <li>Ristampa: ${card.expansion.reprintID}</li>
      <li>Nome: ${card.expansion.rarity}</li>
      <li>Rarità: ${card.expansion.rarity}</li>
      <li>Numero Collezione: ${card.expansion.collectionNr}</li>
    </ul>
  </li>
  <li>Testo di Colroe: ${card.flavorText.quote} - ${card.flavorText.author}</li>
  <li><strong>Abilità:</strong></li>
  <li>Costituzione: ${card.constitution}</li>
  <li>Forxa: ${card.strenght}</li>
  <li>Colore bordo: ${card.borderColor}</li>
  <li>Illustrazione: 
    <ul>
      <li>Autore: ${card.illustrator.author.name} (id: ${
  card.illustrator.author.id
})</li>
      <li>Link illustrazione: <img src="${card.illustrator.source}"/></li>
    </ul>
  </li>
</ul>`;

console.log(cardTemplate);

cardSection.innerHTML = cardTemplate;
