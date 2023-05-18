import { Link } from "react-router-dom";
import GameCard from "./GameCard";

export default function Dashboard({newgames, genre}) {
    console.log(newgames)
    return(
        <>
        <div id="gameshop">
            <h2>GAMESHOP</h2>
            <Link to="/gameshop">
                <button type="button">Visit shop</button>
            </Link>
            <section className="gameshopSection">
            {newgames?.slice(0,3).map((games, index) => (
                <GameCard key={index} img={games?.short_screenshots} title={games?.name} genre={games?.genres} slug={games?.slug}/>
            ))}               
            </section>
        </div>
        <section>
            <h2>MY GAMES - LIBRARY</h2>
            {genre?.slice(0,4).map((games, index) => (
                <GameCard key={index} img={games?.short_screenshots} title={games?.name} genre={games?.genres} slug={games?.slug} />
            ))}
            <Link to="/mygames">
                <button type="button">Go to library</button>
            </Link>
        </section>
        <aside>
            <h2>MY FAVOURITES</h2>
            <Link to="/favourites">
                <button type="button">Go to favorites</button>
            </Link>
        </aside>
        </>
    )
}