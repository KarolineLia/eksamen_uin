import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import Layout from './components/Layout';
import './css/main.css';
import { useEffect, useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import GamePage from './components/GamePage';

function App() {
  {/*For å få nye spill til gameshop */}
  const [newgames, setNewGames] = useState([])

  const getNewGames = async() =>{
    const response = await fetch(`https://api.rawg.io/api/games?key=468792da558d44a6b2d4c9767b13cb25&dates=2023-01-01,2023-12-30`)
    const data = await response.json()
    setNewGames(data)
  }
  useEffect(() =>{
    getNewGames()
  },[])

  {/*For å få spill fra en sjanger til My Games*/}
  const [genre, setGenre] = useState([])
  
  const getGenre = async() =>{
    const response = await fetch(`https://api.rawg.io/api/games?key=468792da558d44a6b2d4c9767b13cb25&genres=rpg,action`)
    const data = await response.json()
    setGenre(data)
  }
  useEffect(() =>{
    getGenre()
  },[])

  {/*Siden jeg ikke rakk å få lagt til favoritter gjennom en knapp, bruker jeg bare useState slik som tidligere og bygger opp favourites som eks. My Games */}
  const [favourites, setFavourites] = useState([])

  const getFavourites = async() =>{
    const response = await fetch(`https://api.rawg.io/api/games?key=468792da558d44a6b2d4c9767b13cb25`)
    const data = await response.json()
    setFavourites(data)
  }
  useEffect(() =>{
    getFavourites()
  },[])


  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Dashboard newgames={newgames.results} genre={genre.results} favourites={favourites.results}/>}/>
        <Route path="/gameshop" element={<GameShop newgames={newgames.results}/>}/>
        <Route path="/mygames" element={<MyGames genre={genre.results}/>}/>
        <Route path="/favourites" element={<MyFavourites favourites={favourites.results}/>}/>
        <Route path="/:slug" element={<GamePage newgames={newgames.results} genre={genre.results}/>}/>
      </Route>
    </Routes>
  );
}

export default App;
