import GameCard from "./GameCard";

export default function MyFavourites({favourites}) {
    return(
        <div id="myfavourites">
            <h1>My Favourites</h1>
            <section className="gameshopSection">
            {favourites?.slice(0,12).map((games, index) => (
                <GameCard key={index} img={games?.background_image} title={games?.name} genre={games?.genres} slug={games?.slug} />
            ))}
            </section>
        </div>
    )
}