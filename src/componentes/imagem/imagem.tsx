import "./imagem.css";
import axios from "axios";

interface Props {
  image?: string;
}

var imagemPokemon: string;

async function ImgPokemon() {
  const UrlPoke: string = "https://pokeapi.co/api/v2/pokemon-form/20/";

  await axios
    .get(UrlPoke, {
      headers: {
        Accept: "application/json",
      },
    })
    .then(async function (response) {
      var imagemPokemonUrl: string;
      imagemPokemonUrl = response.data.sprites.front_default;
      imagemPokemon = imagemPokemonUrl
      return imagemPokemonUrl;
    });
}

ImgPokemon();

function Imagem(props: Props) {
  return (
    <div>
      <h1>raticate</h1>
      <img src={imagemPokemon} />
    </div>
  );
}

export default Imagem;
