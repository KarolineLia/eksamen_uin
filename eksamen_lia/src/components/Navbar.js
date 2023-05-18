import { Link } from "react-router-dom";

//Her brukte jeg https://www.youtube.com/watch?v=SLfhMt5OUPI for hvordan jeg kan
//sette opp en navbar. Dette spriker ikke veldig fra pensum, men tenkte det var greit
//å inkludere siden jeg brukte videoen når jeg satt den opp.

export default function Navbar() {
    return(
        <nav className="navbar">
            <h1>MACs Gamehub</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gameshop">Shop</Link></li>
                <li><Link to="/mygames">My Games</Link></li>
                <li><Link to="/favourites">Favourites</Link></li>
            </ul>
        </nav>
    )
}