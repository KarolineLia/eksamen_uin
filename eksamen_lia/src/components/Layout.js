import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
    return(
        <div id="container">
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <a href="https://rawg.io/">All kreditt til API creator Rawg</a>
            </footer>

        </div>
    )
}