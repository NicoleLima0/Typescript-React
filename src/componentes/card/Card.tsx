import React from "react";
import axios from "axios";
import "./Card.css";

interface Props {
  name?: string;
  image?: string;
}

async function GetPokemon() {
  const URL: string = "https://pokeapi.co/api/v2/pokemon/";
    await axios.get(
      URL,
      {
        headers: {
          Accept: "application/json",
        },
      }
      //   const pokemonNames = data.results.map(
      //     (pokemon: { name: string }) => pokemon.name
    )
    .then(function (response) {
      var pokeName: Object = response.data.pokemon;
      var logDoConsole = Object.keys(pokeName).map((key) => {
        var pokeNameMap;
        pokeNameMap = pokeName[key as keyof typeof pokeName];
        return pokeNameMap;
      });
      return console.log(logDoConsole);
    })

    .catch();
}

export default function Card(props: Props) {
  return <h1> oiii </h1>;
}

GetPokemon();
