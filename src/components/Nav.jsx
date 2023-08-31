import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";


export default function Nav({onSearch, clearAll, setAccess}){

    function randomNumber(min = 1, max = 826) {//una funcion para generar un id random entre los numeros 1 y 826
        min = Math.ceil(min); 
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const logout = () => {
      setAccess(false);
    }         
    

return(
    <nav>
        <SearchBar onSearch={onSearch}/>
        <button onClick={() => {onSearch(randomNumber())}}>Random character</button>
        <NavLink to="/about">
        <button>About</button>
        </NavLink>
        <NavLink to="/home">
        <button>Home</button>
        </NavLink>
        <button onClick={()=>clearAll()}>Clear All</button>
        <button onClick={logout}>LogOut</button>

    </nav>
)

}