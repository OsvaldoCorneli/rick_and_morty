import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
import style from "./card.module.css"

export function Card(props) {
   const {id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites} = props;
   
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
    if(isFav){
      setIsFav(false);
      removeFav(id);
    }else{
      setIsFav(true);
      addFav({id,name,status,species,gender,origin,image})
    }

   }

  

   return (
      <div className={style.tarjeta}>


         <div className={style.contenido}>
          {   isFav ? (      <button className={style.favorito} onClick={handleFavorite}>❤️</button>   ) : 
          (      <button className={style.favorito} onClick={handleFavorite}>🤍</button>   )}
         
         <button className={style.cerrar}  onClick={() => onClose(id)}>X</button>
            <Link to = {`/detail/${id}`}>
         <h2 className={style.nombre}>{name}</h2>
          <img src={image} alt={name} className={style.imagen} />
         </Link>
          <div className={style.atributos}>
         <h2 className={style.species}>{species}</h2>
          <h2 className={style.gender}>{gender}</h2>
         </div>
          </div>
          
         
      </div>
   );
};

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}
export function mapDispatchToProps(dispatch){
   return{
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
       
   }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Card);