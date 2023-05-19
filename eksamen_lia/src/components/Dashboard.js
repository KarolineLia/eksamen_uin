import { Link } from "react-router-dom";
import GameCard from "./GameCard";


export default function Dashboard({newgames, genre, favourites}) {

    console.log(favourites)
    return(
        <>
        <div id="gameshop">
            <h2>GAMESHOP</h2>
            <Link to="/gameshop">
                <button type="button">Visit shop</button>
            </Link>
            {/*Her brukte jeg https://codingbeautydev.com/blog/react-button-link/ */}

            <section className="gameshopSection">
            {newgames?.slice(0,3).map((games, index) => (
                <GameCard key={index} img={games?.background_image} title={games?.name} genre={games?.genres} slug={games?.slug}/>
            ))}               
            </section>
        </div>
        <div className="mygamesLibrary">
            <h2>MY GAMES - LIBRARY</h2>
            <section className="mygamesSection">
                {genre?.slice(0,4).map((games, index) => (
                    <GameCard key={index} img={games?.background_image} title={games?.name} genre={games?.genres} slug={games?.slug} />
                ))}
            </section>
            <Link to="/mygames">
                <button type="button">Go to library</button>
            </Link>
            {/*Her brukte jeg https://codingbeautydev.com/blog/react-button-link/ */}
        </div>
        <div id="favorites">
            <aside className="favouritesAside">
            <h2>MY FAVOURITES</h2>
                {favourites?.slice(0,2).map((games, index) => (
                    <GameCard key={index} img={games?.background_image} title={games?.name} genre={games?.genres} slug={games?.slug} />
                ))} 

                 <Link to="/favourites">
                    <button type="button">Go to favorites</button>
                </Link>
                {/*Her brukte jeg https://codingbeautydev.com/blog/react-button-link/ */} 
            </aside>
        </div>
        </>
    )
}

//Her brukte jeg https://www.youtube.com/watch?v=PGCMdiXRI6Y for .slice()