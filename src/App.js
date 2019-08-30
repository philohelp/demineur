import React, { useState } from "react";

import "./App.css";
import "bulma/css/bulma.css";

import { Columns, Column } from "bloomer";

import bomb from "./images/bomb.png";

const nombreAuHasard = () => {
  const chiffre = Math.floor(Math.random() * 10);
  console.log("chiffre au hasard = ", chiffre);
  return chiffre;
};

const CarreVide = props => {
  return (
    <div
      style={{
        height: 20,
        width: 20,
        margin: 1,
        backgroundColor: "#d9e5ec",
        color: "white"
      }}
    />
  );
};

const CarreBomb = props => {
  return (
    <img
      src={bomb}
      style={{
        height: 20,
        width: 20,
        margin: 1
      }}
      alt="Bombe !"
    />
  );
};

const CarreInconnu = props => {
  return (
    <div
      style={{
        height: 20,
        width: 20,
        margin: 1,
        backgroundColor: "grey",
        color: "white"
      }}
    />
  );
};

// Louis ? "Bonjour Louis !" : "Bonjour Théodore !"

const Carre = props => {
  const [visible, rendsVisible] = useState(false);
  nombreAuHasard();
  const handleClick = () => {
    rendsVisible(true);
  };
  const { bombeOuPas } = props;
  return (
    <div style={{ cursor: "pointer" }} onClick={() => handleClick()}>
      {visible ? (
        <div>{bombeOuPas === 0 ? <CarreVide /> : <CarreBomb />}</div>
      ) : (
        <CarreInconnu />
      )}
    </div>
  );
};

const generateLigne1 = () => {
  let ligne1 = [];
  for (let x = 0; x < 10; x++) {
    const nb = nombreAuHasard();
    if (nb === 3) {
      const bombeOuPas = 1;
      ligne1.push(bombeOuPas);
    }
    const bombeOuPas = 0;
    ligne1.push(bombeOuPas);
  }
  return ligne1;
};

function App() {
  const ligne1 = generateLigne1();
  return (
    <div
      style={{
        margin: 100,
        height: 250,
        width: 250,
        backgroundColor: "black",
        padding: 5
      }}
    >
      <Columns isPaddingless isMarginless>
        {ligne1.map((bombeOuPas, index) => (
          <Column isPaddingless isMarginless key={index}>
            <Carre bombeOuPas={bombeOuPas} />
          </Column>
        ))}
      </Columns>
    </div>
  );
}

export default App;
