import { Link } from "react-router-dom";
import GamePage from "./GamePage";

export default function GameCard({img, title, genre, slug}) {
    const poster = img.slice(0,1)
    
    return(
        <article id="gamecard">
           {poster.map((images, index) => (
            <img key={-1} src={images.image}/>
           ))}
            <h3>{title}</h3>
            {genre.map((genres) => (
                <p>{genres.name}</p>
            ))}

            <Link to={slug} >Les mer</Link>
           
        </article>
    )
}