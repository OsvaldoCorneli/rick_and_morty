
import Card from "../Card/Card"
import { connect } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./favorites.module.css"

const Favorites = ({myFavorites})=>{
  
  const [aux, setAux] = useState(false)

  const dispatch = useDispatch();

  const handleOrder = (event) => {
     dispatch(orderCards(event.target.value))
     if(aux){
      setAux(false)
    }else{setAux(true)}
  }

  const handleFilter = (event) =>{
  dispatch(filterCards(event.target.value))

  }

return(
    <>
    <select className={style.select} onChange={handleOrder}>
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
    </select>
    <select className={style.select} onChange={handleFilter}>
      <option value="">All</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">unknown</option>

    </select>
    <h1 className={style.tittle}>FAVORITES</h1>
    
    <div className={style.ordenar}>
  {  myFavorites?.map(element => 
      <Card
         key={element.id}
         id={element.id}
         name={element.name}
         species={element.species}
         gender={element.gender}
         image={element.image}
         
         />)
       }
</div>
      </>
) 
}

export const mapStateToProp = (state)=>{
    return{
    myFavorites: state.myFavorites
}

}


export default connect (mapStateToProp, null)(Favorites);