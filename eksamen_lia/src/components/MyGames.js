import GameCard from "./GameCard";

export default function MyGames({genre}) {
    return(
        <div id="mygames">
            <h1>My Games</h1>
            <section className="gameshopSection">
            {genre?.map((games, index) => (
                <GameCard key={index} img={games?.background_image} title={games?.name} genre={games?.genres} slug={games?.slug} />
            ))}
            </section>
        </div>
    )
}