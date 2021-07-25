const fullDeck = [
  {
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
      {
        ability: "Questa carta fa cose",
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
  },

  {
    id: 2,
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
      {
        ability: "Questa carta fa cose",
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
  },

  {
    id: 3,
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
      {
        ability: "Questa carta fa cose",
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
  },
];

const firstCard = {
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
    {
      ability: "Questa carta fa cose",
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

// Function
const createCardTemplate = (card) => {
  let subType = card.subType ? card.subType : "";
  let abilitiesContent = "<em>Nessuna abilità</em>";
  if (card.abilities.length) {
    abilitiesContent = "<ul>";
    for (let i = 0; i < card.abilities.length; i++) {
      const currentAbility = card.abilities[i];
      abilitiesContent += "--";
      abilitiesContent += "<li>Descrizione: ${currentAbility.description}</li>";
      (abilitiesContent +=
        "<li>Costo di lancio: ${currentAbility.launchCost.join("),
        ")}</li>";
    }
    abilitiesContent += "</ul>";
  }

  const cardTemplate = `
  <div class="template">
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
    <li>Testo di Colroe: ${card.flavorText.quote} - ${
    card.flavorText.author
  }</li>
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
  </ul>
  </div>
  `;

  return cardTemplate;
};

const renderDeck = (deck, targetElement) => {
  let deckTemplate = "";
  for (let i = 0; i < deck.length; i++) {
    const currentCard = deck[i];
    const currentCardTemplate = createCardTemplate(currentCard);
    deckTemplate += currentCardTemplate;
  }
  targetElement.innerHTML = deckTemplate;
};

// Stampa in pagina
const cardsSection = document.getElementById("cards");

renderDeck(fullDeck, cardsSection);

// Filter logics
const inputField = document.getElementById("search");
const selectField = document.getElementById("filter");
const button = document.getElementById("button");

// Intercetto il cambaimento della tendina
selectField.addEventListener("change", () => {
  const currentValue = selectField.value;
  if (currentValue !== "all") {
    inputField.classList.remove("hidden");
  } else {
    inputField.classList.add("hidden");
  }
});

button.addEventListener("click", () => {
  const inputValue = inputField.value;
  const selectValue = selectField.value;

  if (selectValue === "all") {
    renderDeck(fullDeck, cardsSection);
    return;
  }

  const filteredDeck = [];
  for (let i = 0; i < fullDeck.length; i++) {
    const currentCard = fullDeck[i];

    switch (selectValue) {
      case "id":
      case "constitution":
      case "strength":
      case "combinedManaCost":
        if (currentCard[selectValue] == inputValue) {
          filteredDeck.push(currentCard);
        }
        break;
      default:
        if (currentCard[selectValue].includes(inputValue)) {
          filteredDeck.push(currentCard);
        }
        break;
    }
  }

  renderDeck(filteredDeck, cardsSection);
});
