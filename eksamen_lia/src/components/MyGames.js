import GameCard from "./GameCard";

export default function MyGames({genre}) {
    return(
        <div id="mygames">
            <section>
            {genre?.map((games, index) => (
                <GameCard key={index} img={games?.background_image} title={games?.name} genre={games?.genres} slug={games?.slug} />
            ))}
            </section>
        </div>
    )
}