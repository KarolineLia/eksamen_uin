import GameCard from "./GameCard";

export default function GameShop({newgames}) {
    return(
        <div id="gameshop">
            <section>
            {newgames?.slice(0,10).map((games, index) => (
                <GameCard key={index} img={games?.background_image} title={games?.name} genre={games?.genres} slug={games?.slug}/>
            ))}  
            </section>
        </div>
    )
}