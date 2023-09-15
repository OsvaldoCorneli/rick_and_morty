import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
import style from "./card.module.css"

export function Card(props) {
   const location = useLocation();
   const {id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites} = props;
   const isNameTooLong = name.length > 15;
   const [isFav, setIsFav] = useState(false);
   

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id]);

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
      

      <div className={`${style.tarjeta} ${isNameTooLong ? style.nombreLargo : ''}`}>
      

         <div className={style.contenido}>
          {   isFav ? (      <button className={style.favorito} onClick={handleFavorite}>❤️</button>   ) : 
          (      <button className={style.favorito} onClick={handleFavorite}>🤍</button>   )}
         
         {location.pathname !== "/favorites" && <button className={style.cerrar}  onClick={() => onClose(id)}>X</button>}
            <h2 h2 className={`${style.nombre} ${isNameTooLong ? style.nombreChico : ''}`}>{name}</h2>
            <Link to = {`/detail/${id}`}>
          <img src={image} alt={name} className={style.imagen} />
         </Link>
         <div className={style.atributos}>
         <h2 className={`${style.species} ${style.gender}`}>{species}</h2>
         <h2 className={`${style.gender} ${style.origin}`}>{gender}</h2>
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