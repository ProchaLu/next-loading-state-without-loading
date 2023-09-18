import GeneratePokemon from './GeneratePokemon';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default function PokemonPage() {
  return (
    <main>
      <h1>Pokemon Page</h1>
      <GeneratePokemon />
      <p>lorem....</p>
    </main>
  );
}
