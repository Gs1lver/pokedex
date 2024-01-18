interface Props {
  pokemon: any;
}

export default function Sprite({ pokemon }: Props) {
  return (
    <>
      <section>
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      </section>
    </>
  );
}
