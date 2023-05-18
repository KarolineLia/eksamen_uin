import GameCard from "./GameCard";

export default function GameShop({newgames}) {
    return(
        <div id="gameshopStore">
            <h1>Game Shop</h1>
            <section className="gameshopSection">
            {newgames?.slice(0,10).map((games, index) => (
                <GameCard key={index} img={games?.background_image} title={games?.name} genre={games?.genres} slug={games?.slug}/>
            ))}

            </section>
        </div>
    )
}

//Her brukte jeg https://www.youtube.com/watch?v=PGCMdiXRI6Y for .slice()