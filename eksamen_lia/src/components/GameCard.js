import { Link } from "react-router-dom";
import GamePage from "./GamePage";

export default function GameCard({img, title, genre, slug}) {
    
    return(
        <article id="gamecard">
            <img src={img}/>
            <h3>{title}</h3>
            {genre.map((genres, index) => (
                <p key={index}>{genres.name}</p>
            ))}

            <Link to={slug} >Les mer</Link>
           
        </article>
    )
}