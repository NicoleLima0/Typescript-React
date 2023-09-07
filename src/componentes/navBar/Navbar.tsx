// import React from "react";
// import './Navbar.css'

// interface Props {
//     item1:string;
//     item2: number;
//     ok?: boolean;
// }

// export default function Navbar (props:Props) {
//     return (
//         <div>
//             {props.item1}
//             {props.item2 }
//         </div>
//     );
// }

import React from "react";
import axios from "axios";
import "./Navbar.css";
import Cidades from "../utils/cities";

interface Props {
  item1: string;
  item2: number;
  ok?: boolean;
  teste?: boolean;
}

async function AxiosTeste() {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
    headers: {
      Accept: "application/json",
    },
  });
  
  const pokemonNames = data.results.map(
    (pokemon: { name: string }) => pokemon.name
  );

  return console.log(pokemonNames);
}

AxiosTeste();

function Navbar(props: Props) {
  return (
    <div>
      {props.item1}
      {props.item2}
      {Object.keys(Cidades()).map((key) => {
        return <h1 key={key}>{Cidades()[key as keyof typeof Cidades]}</h1>;
      })}
    </div>
  );
}

export default Navbar;
