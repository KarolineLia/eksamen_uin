import { useParams } from "react-router-dom"

export default function GamePage({newgames, genre}) {
    const {slug} = useParams()
    const gameshop = newgames.find((rec) => rec?.slug === slug)
    
    if(slug === gameshop.slug) {
        return(
            <div className="gamePage">
                <img src={gameshop.background_image}/>
                <h1>{gameshop.name}</h1>
                <p>Genre: {gameshop?.genres?.map(genre => genre.name).join(', ')}</p>
                <p>Published: {gameshop.released}</p>
                <p>Tags: {gameshop?.tags?.slice(0,1).map(tag => tag.name)}</p>

                <button id="metacritic" onClick={() => (window.location.href = `https://www.metacritic.com/game/pc/${slug}`)}>{gameshop.metacritic}</button>

                <button onClick={() => (window.location.href = `https://rawg.io/games/${slug}`)}>Buy</button>
            </div>
        )
    }

}