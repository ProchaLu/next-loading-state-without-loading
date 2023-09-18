export default async function GeneratePokemon() {
  async function getPokemon() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`,
    );
    const data = await response.json();
    return data.name;
  }

  const pokemon = await getPokemon();

  return <main>This in a {pokemon} page</main>;
}
