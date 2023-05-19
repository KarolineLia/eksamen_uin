import { Link } from "react-router-dom";

export default function GameCard({img, title, genre, slug}) {
    
    return(
        <article id="gamecard">
            <img src={img} alt="Bilde av spill"/>
            <h3>{title}</h3>
            {genre.slice(0,1).map((genres, index) => (
                <p key={index}>{genres.name}</p>
            ))}

            <Link to={slug} >Les mer</Link>
           <button onClick={() => (window.location.href = `https://rawg.io/games/${slug}`)}>Buy</button>
        </article>
    )
}