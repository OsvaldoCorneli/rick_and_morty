import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./nav.module.css"
import { useLocation } from "react-router-dom";

export default function Nav({onSearch, clearAll, logout}){
    const location = useLocation();
    function randomNumber(min = 1, max = 826) {//una funcion para generar un id random entre los numeros 1 y 826
        min = Math.ceil(min); 
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
 
    const isFavoritesPage = location.pathname === "/favorites";

    

return(     
    <nav  className={style.navbar}>
        
        <div className={style.searchBarContainer}>
        <SearchBar onSearch={onSearch} />
        </div>
        <NavLink to="/home">
        <button className={style.button} >Home</button>
        </NavLink>
        
        <button className={style.button} onClick={() => {onSearch(randomNumber())}}>Random character</button>
        <NavLink to='/favorites'>
         <button className={style.button} >Favorites</button>
         </NavLink>
        <button className={style.button} onClick={()=>clearAll()}>Clear All</button>
        <NavLink to="/about">
        <button className={style.button} >About</button>
        </NavLink>
        <button className={style.button} onClick={logout}>LogOut</button>

    </nav>
)

}

